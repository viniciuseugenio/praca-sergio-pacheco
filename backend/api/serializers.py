from rest_framework import serializers
from .models import Event, NatureElement


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'title', 'description', 'day', 'time', 'end_time', 'address', 'capacity']


class NatureElementSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    
    class Meta:
        model = NatureElement
        fields = ['id', 'name', 'scientific_name', 'description', 'type', 'image', 'image_url']
        extra_kwargs = {
            'image': {'write_only': True}
        }
    
    def get_image_url(self, obj):
        if obj.image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return None
