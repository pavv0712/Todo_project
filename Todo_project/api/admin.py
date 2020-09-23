from django.contrib import admin
from .models import TodoGroup,Todo

# Register your models here.

@admin.register(TodoGroup)
class TodoGroupAdmin(admin.ModelAdmin):
    pass

@admin.register(Todo)
class TodoAdmin(admin.ModelAdmin):
    pass