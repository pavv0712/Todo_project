from django.urls import path,include
from rest_framework import routers
from . import views
from rest_framework.routers import DefaultRouter

router = routers.DefaultRouter()
router.register('todos', views.TodoViewSet)
router.register('todogroup', views.TodoGroupViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('todos', views.TodoViewSet)
]