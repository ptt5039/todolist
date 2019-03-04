from django.contrib import admin
from .models import Todo, TaskImage
# from rest_framework.authtoken.admin import TokenAdmin

class TaskAdmin(admin.ModelAdmin):
    pass

class TodoAdmin(admin.ModelAdmin):
    pass

admin.site.register(TaskImage, TaskAdmin)

admin.site.register(Todo, TodoAdmin)

# TokenAdmin.raw_id_fields = ('user',)
