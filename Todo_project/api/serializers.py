from .models import TodoGroup, Todo
from rest_framework import serializers


class TodoSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'
