# Generated by Django 2.1.4 on 2019-03-01 08:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0014_auto_20190301_1433'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='taskimage',
            options={},
        ),
        migrations.AlterField(
            model_name='taskimage',
            name='task',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='todos.Todo'),
        ),
    ]