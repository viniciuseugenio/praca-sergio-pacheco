from django.urls import path
from .views import EventListCreateView, EventRetrieveUpdateDestroyView
from .auth_views import LoginView, LogoutView, CookieTokenRefreshView, VerifyAuthView

urlpatterns = [
    # Events endpoints
    path('events/', EventListCreateView.as_view(), name='event-list-create'),
    path('events/<int:pk>/', EventRetrieveUpdateDestroyView.as_view(), name='event-detail'),
    
    # Auth endpoints
    path('auth/login/', LoginView.as_view(), name='auth-login'),
    path('auth/logout/', LogoutView.as_view(), name='auth-logout'),
    path('auth/refresh/', CookieTokenRefreshView.as_view(), name='auth-refresh'),
    path('auth/verify/', VerifyAuthView.as_view(), name='auth-verify'),
]
