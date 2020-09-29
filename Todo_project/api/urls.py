from django.urls import path,include
from rest_framework import routers
from . import views
from rest_framework.routers import DefaultRouter

router = routers.DefaultRouter()
router.register('todo', views.TodoViewSet)
router.register('todogroup', views.TodoGroupViewSet)
router.register('favorite', views.FavoriteViewSet)
router.register('favogroup', views.FavoriteGroupViewSet)


urlpatterns = [
    path('', include(router.urls))
]