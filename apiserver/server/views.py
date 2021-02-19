from django.shortcuts import render
from rest_framework import generics

from .models import doc 
from .serializers import docSerializer


class docListCreate(generics.ListCreateAPIView):
	queryset = doc.objects.all()
	serializer_class = docSerializer

