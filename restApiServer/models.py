from django.db import models
#from django.contrib.gis.db import models as gisModels

# Create your models here.


class Doc(models.Model):
	title = models.CharField(max_length=100)
	place = models.CharField(max_length=100)

	# TODO gis doc @ https://docs.djangoproject.com/en/3.1/ref/contrib/gis/model-api/

	date = models.DateTimeField()
	category = models.CharField(max_length=100)
	keywords = models.TextField()
	content = models.TextField()

	# Metadata
	extracted_from = models.CharField(max_length=100)
	extracted_by = models.CharField(max_length=100)
	extracted_at = models.DateTimeField()
	updated_at = models.DateTimeField()
