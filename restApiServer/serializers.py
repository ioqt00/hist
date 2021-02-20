from rest_framework import serializers
from .models import Doc

import django_filters


class DocSerializer(serializers.ModelSerializer):
	class Meta:
		model = Doc
		fields = (
			'id',
			'title',
			'place',
			'date',
			'category',
			'keywords',
			'content',
			'extracted_from',
			'extracted_by',
			'extracted_at',
			'updated_at'
		)
