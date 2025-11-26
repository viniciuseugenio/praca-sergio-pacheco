from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.exceptions import AuthenticationFailed


class CookieJWTAuthentication(JWTAuthentication):
    """
    Custom JWT authentication class that reads the JWT token from cookies
    instead of the Authorization header.
    """

    def authenticate(self, request):
        # Try to get token from cookie first
        cookie_token = request.COOKIES.get("access_token")
        
        if cookie_token:
            try:
                validated_token = self.get_validated_token(cookie_token)
                return self.get_user(validated_token), validated_token
            except AuthenticationFailed:
                pass
        
        # Fallback to header-based authentication
        return super().authenticate(request)
