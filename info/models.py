from django.db import models

# Create your models here.


class Education(models.Model):
    degree = models.CharField(max_length=200)
    institute = models.CharField(max_length=200)
    start = models.CharField(max_length=100)
    end = models.CharField(max_length=100, blank=True, null=True)
    ongoing = models.BooleanField(default=True)
    description = models.TextField()

    def __str__(self):
        return self.degree


class Skill(models.Model):
    title = models.CharField(max_length=300)
    specialization = models.CharField(max_length=300, blank=True, null=True)
    start = models.CharField(max_length=100)
    end = models.CharField(max_length=100, blank=True, null=True)
    ongoing = models.BooleanField(default=True)
    description = models.TextField()

    def __str__(self):
        return self.title


class Contest(models.Model):
    title = models.CharField(max_length=300, blank=True, null=True)
    team = models.CharField(max_length=300, blank=True, null=True)
    position = models.CharField(max_length=100)

    def __str__(self):
        return self.title


class Experience(models.Model):
    designation = models.CharField(max_length=300, blank=True, null=True)
    institute = models.CharField(max_length=300, blank=True, null=True)
    start = models.CharField(max_length=100)
    end = models.CharField(max_length=100, blank=True, null=True)
    ongoing = models.BooleanField(default=True)
    description = models.TextField()

    def __str__(self):
        return self.institute


class Expertise(models.Model):
    title = models.CharField(max_length=300)
    percentage = models.CharField(max_length=50)

    def __str__(self):
        return self.title


class Project(models.Model):
    title = models.CharField(max_length=200)
    url = models.URLField()
    banner = models.URLField()

    def __str__(self):
        return self.title
