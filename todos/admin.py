from django.contrib import admin
from .models import Todo, TaskImage
# from rest_framework.authtoken.admin import TokenAdmin

class TodoAdmin(admin.ModelAdmin):
    pass
    
class TaskAdmin(admin.ModelAdmin):
    pass

admin.site.register(Todo, TodoAdmin)

admin.site.register(TaskImage, TaskAdmin)

# TokenAdmin.raw_id_fields = ('user',)
