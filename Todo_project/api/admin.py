from django.contrib import admin
from .models import TodoGroup,Todo

# Register your models here.

@admin.register(TodoGroup)
class TodoGroupAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(Todo)
class TodoAdmin(admin.ModelAdmin):
    list_display = ['group','name','status','reg_date','end_date']