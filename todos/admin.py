from django.contrib import admin
from .models import Todo, TaskImage
from django.contrib.auth.models import Group
from rest_framework.authtoken.admin import Token

class ImageInline(admin.StackedInline):
    model = TaskImage

@admin.register(Todo)
class TodoAdmin(admin.ModelAdmin):
    inlines = [ImageInline]
    list_display = ['title', 'user']
    list_filter = ['user']
    search_fields = ['title']
    fields = ['title', 'user']
    

admin.site.unregister(Group)
admin.site.unregister(Token)

# TokenAdmin.raw_id_fields = ('user',)
