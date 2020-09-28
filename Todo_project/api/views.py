from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer, TodoGroupSerializer, FavoriteGroupSerializer, FavoriteSerializer
from .models import TodoGroup, Todo, FavoriteGroup, Favorite
# Create your views here.

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    def get_qeuryset(self):
        qs = super().get_quesryset()
        status = self.request.query_params.get('status')
        if status:
            qs = qs.filter(status=status)
        return qs

class TodoGroupViewSet(viewsets.ModelViewSet):
    queryset = TodoGroup.objects.all()
    serializer_class = TodoGroupSerializer

class FavoriteGroupViewSet(viewsets.ModelViewSet):
    queryset = FavoriteGroup.objects.all()
    serializer_class = FavoriteGroupSerializer

class FavoriteViewSet(viewsets.ModelViewSet):
    queryset = Favorite.objects.all()
    serializer_class = FavoriteSerializer    