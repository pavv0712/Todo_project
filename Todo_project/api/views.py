from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerialzer
from .models import TodoGroup, Todo
# Create your views here.

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerialzer
