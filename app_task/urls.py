
from django.contrib import admin
from django.db import router
from django.urls import path
from django.urls import path, include  
from Task.views import TaskViewSet, create_task, update_task, delete_task, get_all_tasks
from rest_framework.routers import DefaultRouter
from Task.views import TaskViewSet



urlpatterns = [
    path('admin/', admin.site.urls),
    path('Task/tasks/', get_all_tasks, name='get_all_tasks'),
    path('Task/tasks/create/', create_task, name='create_task'),
    path('Task/tasks/update/<int:pk>/', update_task, name='update_task'),
    path('Task/tasks/delete/<int:pk>/', delete_task, name='delete_task'),
]
