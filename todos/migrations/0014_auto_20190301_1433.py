# Generated by Django 2.1.4 on 2019-03-01 07:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0013_auto_20190214_0915'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='taskimage',
            options={'default_related_name': 'tasks', 'verbose_name': 'task', 'verbose_name_plural': 'tasks'},
        ),
        migrations.AlterField(
            model_name='taskimage',
            name='task',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tasks', to='todos.Todo'),
        ),
    ]