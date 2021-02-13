from django.shortcuts import render
from .models import Education, Skill, Experience, Expertise, Contest, Project
from .serializers import EducationSerializer, SkillSerializer, ExperienceSerializer, ExpertiseSerializer, ContestSerializer, ProjectSerializer
from rest_framework import viewsets

# Create your views here.


class EducationViewset(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer


class SkillViewset(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class ExperienceViewset(viewsets.ModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


class ExpertiseViewset(viewsets.ModelViewSet):
    queryset = Expertise.objects.all()
    serializer_class = ExpertiseSerializer


class ContestViewset(viewsets.ModelViewSet):
    queryset = Contest.objects.all()
    serializer_class = ContestSerializer


class ProjectViewset(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
