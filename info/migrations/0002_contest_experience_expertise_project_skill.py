# Generated by Django 3.1.6 on 2021-02-13 10:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('info', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contest',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=300, null=True)),
                ('team', models.CharField(blank=True, max_length=300, null=True)),
                ('position', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Experience',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('designation', models.CharField(blank=True, max_length=300, null=True)),
                ('institute', models.CharField(blank=True, max_length=300, null=True)),
                ('start', models.CharField(max_length=100)),
                ('end', models.CharField(blank=True, max_length=100, null=True)),
                ('ongoing', models.BooleanField(default=True)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Expertise',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=300)),
                ('percentage', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('url', models.URLField()),
                ('banner', models.URLField()),
            ],
        ),
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=300)),
                ('specialization', models.CharField(blank=True, max_length=300, null=True)),
                ('start', models.CharField(max_length=100)),
                ('end', models.CharField(blank=True, max_length=100, null=True)),
                ('ongoing', models.BooleanField(default=True)),
                ('description', models.TextField()),
            ],
        ),
    ]
