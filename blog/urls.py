from django.urls import path, include
from rest_framework import routers
from . import views
from django.views.generic import TemplateView
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

app_name = 'blog'


router = routers.DefaultRouter()
router.register(r'all', views.PostViewset)
# router.register(r'<str:slug>', views.SinglePostView)

urlpatterns = [
    path('', TemplateView.as_view(template_name='build/index.html')),
    path('article/', TemplateView.as_view(template_name='build/index.html')),
    path('api/', include(router.urls)),

] + staticfiles_urlpatterns()
