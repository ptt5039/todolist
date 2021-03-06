import os
import uuid
from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

def uploaded_task_image(instance, filename):
    extension = filename.split(".")[-1]
    return "tasks/{}.{}".format(uuid.uuid4(), extension)

class Todo(models.Model):
    title = models.CharField(blank=True, max_length=100)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    is_complete = models.BooleanField(default=False)    

    class Meta:
        verbose_name = 'Task'
        verbose_name_plural = 'Tasks'

    def __str__(self):
        return self.title

def scramble_uploaded_filename(instance, filename):
    extension = filename.split(".")[-1]
    return "{}.{}".format(uuid.uuid4(), extension)

class TaskImage(models.Model):
    task = models.ForeignKey(Todo, on_delete=models.CASCADE)
    taskImage = models.ImageField(upload_to= uploaded_task_image, blank=True, null=True)

    def __str__(self):
        return self.task.title

class UserInfo(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, unique=True)
    dateOfBirth = models.DateField(blank=True, null=True)
    profileImage = models.ImageField(upload_to=scramble_uploaded_filename, blank=True, null=True)

@receiver(post_save, sender=User)
def user_is_created(sender, instance, created, **kwargs):
    if created:
        UserInfo.objects.create(user=instance)
    else:
        instance.userinfo.save()

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)