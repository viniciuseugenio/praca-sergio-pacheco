from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAdminUser
from .models import Event, NatureElement
from .serializers import EventSerializer, NatureElementSerializer


class EventListCreateView(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    
    def get_permissions(self):
        if self.request.method == 'POST':
            return [IsAdminUser()]
        return [AllowAny()]


class EventRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    
    def get_permissions(self):
        if self.request.method in ['GET']:
            return [AllowAny()]
        return [IsAdminUser()]


class NatureElementListCreateView(generics.ListCreateAPIView):
    queryset = NatureElement.objects.all()
    serializer_class = NatureElementSerializer
    
    def get_permissions(self):
        if self.request.method == 'POST':
            return [IsAdminUser()]
        return [AllowAny()]


class NatureElementRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = NatureElement.objects.all()
    serializer_class = NatureElementSerializer
    
    def get_permissions(self):
        if self.request.method in ['GET']:
            return [AllowAny()]
        return [IsAdminUser()]
