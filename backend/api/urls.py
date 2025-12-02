from django.urls import path

from .auth_views import CookieTokenRefreshView, LoginView, LogoutView, VerifyAuthView
from .views import (
    EventListCreateView,
    EventRetrieveUpdateDestroyView,
    NatureElementListCreateView,
    NatureElementRetrieveUpdateDestroyView,
)

urlpatterns = [
    # Events endpoints
    path("events/", EventListCreateView.as_view(), name="event-list-create"),
    path(
        "events/<int:pk>/",
        EventRetrieveUpdateDestroyView.as_view(),
        name="event-detail",
    ),
    # Nature elements endpoints
    path(
        "nature-elements/",
        NatureElementListCreateView.as_view(),
        name="nature-element-list-create",
    ),
    path(
        "nature-elements/<int:pk>/",
        NatureElementRetrieveUpdateDestroyView.as_view(),
        name="nature-element-detail",
    ),
    # Auth endpoints
    path("auth/login/", LoginView.as_view(), name="auth-login"),
    path("auth/logout/", LogoutView.as_view(), name="auth-logout"),
    path("auth/refresh/", CookieTokenRefreshView.as_view(), name="auth-refresh"),
    path("auth/verify/", VerifyAuthView.as_view(), name="auth-verify"),
]
