from django.db import models

# Create your models here.


class Doc(models.Model):
	title = models.CharField(max_length=100)
	place = models.CharField(max_length=100)
	date = models.DateTimeField()
	category = models.CharField(max_length=100)
	keywords = models.TextField()
	content = models.TextField()

	# Metadata
	extracted_from = models.CharField(max_length=100)
	extracted_by = models.CharField(max_length=100)
	extracted_at = models.DateTimeField()
	updated_at = models.DateTimeField()
