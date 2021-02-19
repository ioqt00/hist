from django.urls import path
from . import views

urlpatterns = [
	path('api/docs',views.docListCreate.as_view() ),
]

