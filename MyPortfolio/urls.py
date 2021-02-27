from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from info import views
from blog import views as blogviews
from django.views.generic import TemplateView

router = routers.DefaultRouter()
router.register(r'educations', views.EducationViewset)
router.register(r'skills', views.SkillViewset)
router.register(r'experiences', views.ExperienceViewset)
router.register(r'expertises', views.ExpertiseViewset)
router.register(r'contests', views.ContestViewset)
router.register(r'projects', views.ProjectViewset)

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    path('blog/', include('blog.urls', namespace='blog')),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('article/api/<str:slug>/', blogviews.SinglePostView.as_view()),
    path('admin/', admin.site.urls),
]
