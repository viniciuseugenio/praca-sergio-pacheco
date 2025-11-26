from datetime import timedelta

from django.conf import settings
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.exceptions import TokenError
from rest_framework_simplejwt.tokens import RefreshToken


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        remember_me = request.data.get("remember_me", False)

        if not username or not password:
            return Response(
                {"error": "Username e senha são obrigatórios"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        user = authenticate(username=username, password=password)

        if user is None:
            return Response(
                {"error": "Credenciais inválidas"},
                status=status.HTTP_401_UNAUTHORIZED,
            )

        if not user.is_staff:
            return Response(
                {"error": "Acesso negado. Apenas administradores podem fazer login."},
                status=status.HTTP_403_FORBIDDEN,
            )

        refresh = RefreshToken.for_user(user)

        # Adjust token lifetime based on remember_me
        if remember_me:
            refresh.set_exp(lifetime=timedelta(days=7))
        else:
            refresh.set_exp(lifetime=timedelta(hours=1))

        response = Response(
            {
                "message": "Login realizado com sucesso",
                "user": {
                    "id": user.id,
                    "username": user.username,
                    "email": user.email,
                    "is_staff": user.is_staff,
                },
            },
            status=status.HTTP_200_OK,
        )

        # Set HttpOnly cookies
        max_age = 7 * 24 * 60 * 60 if remember_me else 60 * 60  # 7 days or 1 hour

        response.set_cookie(
            key="access_token",
            value=str(refresh.access_token),
            max_age=15 * 60,  # 15 minutes
            httponly=True,
            secure=not settings.DEBUG,  # True in production
            samesite="Lax",
        )

        response.set_cookie(
            key="refresh_token",
            value=str(refresh),
            max_age=max_age,
            httponly=True,
            secure=not settings.DEBUG,
            samesite="Lax",
        )

        return response


class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.COOKIES.get("refresh_token")
            if refresh_token:
                token = RefreshToken(refresh_token)
                token.blacklist()

            response = Response(
                {"message": "Logout realizado com sucesso"},
                status=status.HTTP_200_OK,
            )
            response.delete_cookie("access_token")
            response.delete_cookie("refresh_token")
            return response

        except Exception:
            response = Response(
                {"message": "Logout realizado"},
                status=status.HTTP_200_OK,
            )
            response.delete_cookie("access_token")
            response.delete_cookie("refresh_token")
            return response


class CookieTokenRefreshView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        refresh_token = request.COOKIES.get("refresh_token")

        if not refresh_token:
            return Response(
                {"error": "Refresh token não encontrado"},
                status=status.HTTP_401_UNAUTHORIZED,
            )

        try:
            refresh = RefreshToken(refresh_token)
            access_token = refresh.access_token

            response = Response(
                {"message": "Token atualizado com sucesso"},
                status=status.HTTP_200_OK,
            )

            response.set_cookie(
                key="access_token",
                value=str(access_token),
                max_age=15 * 60,  # 15 minutes
                httponly=True,
                secure=not settings.DEBUG,
                samesite="Lax",
            )

            # If ROTATE_REFRESH_TOKENS is True, update refresh token too
            if settings.SIMPLE_JWT.get("ROTATE_REFRESH_TOKENS"):
                response.set_cookie(
                    key="refresh_token",
                    value=str(refresh),
                    max_age=(
                        refresh.get("exp") - refresh.get("iat")
                        if refresh.get("exp")
                        else 7 * 24 * 60 * 60
                    ),
                    httponly=True,
                    secure=not settings.DEBUG,
                    samesite="Lax",
                )

            return response

        except TokenError as e:
            return Response(
                {"error": "Token inválido ou expirado"},
                status=status.HTTP_401_UNAUTHORIZED,
            )


class VerifyAuthView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        return Response(
            {
                "authenticated": True,
                "user": {
                    "id": user.id,
                    "username": user.username,
                    "email": user.email,
                    "is_staff": user.is_staff,
                },
            },
            status=status.HTTP_200_OK,
        )
