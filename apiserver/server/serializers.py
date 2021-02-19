from rest_framework import serializers
from .models import doc 


class docSerializer(serializers.ModelSerializer):
	class Meta:
		model = doc 
		fields = ('id', 'title', 'content', 'updated_at')
