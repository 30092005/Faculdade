
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
    path('admin/', admin.site.urls),
    path('Task/tasks/', get_all_tasks, name='get_all_tasks'),
    path('Task/tasks/create/', create_task, name='create_task'),
    path('Task/tasks/update/<int:pk>/', update_task, name='update_task'),
    path('Task/tasks/delete/<int:pk>/', delete_task, name='delete_task'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # login
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # refresh do token
]

urlpatterns += [
   path('swagger<format>/', schema_view.without_ui(cache_timeout=0), name='schema-json'),
   path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
   path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]