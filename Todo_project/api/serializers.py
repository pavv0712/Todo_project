from .models import TodoGroup, Todo,FavoriteGroup, Favorite
from rest_framework import serializers


class TodoSerializer(serializers.ModelSerializer):
    
    group_name = serializers.ReadOnlyField(source='group.name')

    class Meta:
        model = Todo
        fields = '__all__'

class TodoGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoGroup
        fields ='__all__'

class FavoriteGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteGroup
        fields = '__all__'

class FavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorite
        fields ='__all__'