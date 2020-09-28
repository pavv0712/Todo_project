from django.contrib import admin
from .models import TodoGroup,Todo, FavoriteGroup, Favorite

# Register your models here.

@admin.register(TodoGroup)
class TodoGroupAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(Todo)
class TodoAdmin(admin.ModelAdmin):
    list_display = ['group','name','status','reg_date','end_date']

@admin.register(FavoriteGroup)
class FavoriteGroupAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(Favorite)
class FavoriteAdmin(admin.ModelAdmin):
    list_display = ['group','name','reg_date']