
from django.contrib import admin
from django.db import router
from django.urls import path
from django.urls import path, include  
from Task.views import TaskViewSet, create_task, update_task, delete_task, get_all_tasks
from rest_framework.routers import DefaultRouter
from Task.views import TaskViewSet
from django.urls import re_path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from Task.views import JavaTarefaListCreate

schema_view = get_schema_view(
   openapi.Info(
      title="Snippets API",
      default_version='v1',
      description="Test description",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
        path('java/tarefas/', JavaTarefaListCreate.as_view(), name='java_tarefas'),

]
