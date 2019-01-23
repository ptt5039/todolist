from django.contrib import admin
from .models import Todo
from rest_framework.authtoken.admin import TokenAdmin

class TodoAdmin(admin.ModelAdmin):
    pass

admin.site.register(Todo, TodoAdmin)

TokenAdmin.raw_id_fiels = ('user',)
