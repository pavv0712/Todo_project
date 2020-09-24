from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer, TodoGroupSerializer
from .models import TodoGroup, Todo
# Create your views here.

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class TodoGroupViewSet(viewsets.ModelViewSet):
    queryset = TodoGroup.objects.all()
    serializer_class = TodoGroupSerializer