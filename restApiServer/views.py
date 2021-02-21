from django.shortcuts import render
from rest_framework import generics, filters

from .models import Doc
from .serializers import DocSerializer


class DocListCreate(generics.ListCreateAPIView):
	queryset = Doc.objects.all()
	serializer_class = DocSerializer
	filter_backends = [filters.SearchFilter]
	search_fields = ['title', 'place']
