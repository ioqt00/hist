from django.urls import path
from . import views

urlpatterns = [
	path('api/docs', views.DocListCreate.as_view()),
]

