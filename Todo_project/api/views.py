from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer, TodoGroupSerializer, FavoriteGroupSerializer, FavoriteSerializer
from .models import TodoGroup, Todo, FavoriteGroup, Favorite
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.

@api_view(['GET'])
def TodoAllSelectView(request):
    if request.method == 'GET':
        todo = Todo.objects.all()
        pending = TodoSerializer(todo.filter(status="pending"), many=True)
        inprogress = TodoSerializer(todo.filter(status="inprogress"), many=True)
        end = TodoSerializer(todo.filter(status="end"), many=True)
        return Response({
            "pending": pending.data,
            "inprogress": inprogress.data,
            "end": end.data
        })

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    def get_queryset(self):
        qs = super().get_queryset()
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