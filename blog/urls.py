from django.urls import path, re_path, include
from rest_framework import routers
from . import views
from django.views.generic import TemplateView
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

app_name = 'blog'


router = routers.DefaultRouter()
router.register(r'all', views.PostViewset)
# router.register(r'<str:slug>', views.SinglePostView)

urlpatterns = [
    # path('article/', TemplateView.as_view(template_name='build/index.html')),
    path('api/', include(router.urls)),
    re_path(r'^.*/$', TemplateView.as_view(template_name='build/index.html')),
    path('', TemplateView.as_view(template_name='build/index.html')),

] + staticfiles_urlpatterns()
