from rest_framework import generics
from rest_framework.parsers import FormParser, JSONParser, MultiPartParser
from rest_framework.permissions import AllowAny, IsAdminUser

from .models import Event, NatureElement
from .serializers import EventSerializer, NatureElementSerializer


class EventListCreateView(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def get_permissions(self):
        if self.request.method == "POST":
            return [IsAdminUser()]
        return [AllowAny()]


class EventRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def get_permissions(self):
        if self.request.method in ["GET"]:
            return [AllowAny()]
        return [IsAdminUser()]


class NatureElementListCreateView(generics.ListCreateAPIView):
    queryset = NatureElement.objects.all()
    serializer_class = NatureElementSerializer
    parser_classes = (MultiPartParser, FormParser, JSONParser)

    def get_permissions(self):
        if self.request.method == "POST":
            return [IsAdminUser()]
        return [AllowAny()]

        response = super().create(request, *args, **kwargs)
        return response


class NatureElementRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = NatureElement.objects.all()
    serializer_class = NatureElementSerializer
    parser_classes = (MultiPartParser, FormParser, JSONParser)

    def get_permissions(self):
        if self.request.method in ["GET"]:
            return [AllowAny()]
        return [IsAdminUser()]

    def update(self, request, *args, **kwargs):
        response = super().update(request, *args, **kwargs)
        return response
