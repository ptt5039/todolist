from rest_framework import serializers
from todos.models import Todo, UserInfo, TaskImage
from django.contrib.auth.models import User

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('__all__')
        
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username','first_name','last_name', 'email', 'is_superuser', 'password')
        extra_kwargs = {'password' : {'write_only': True, 'required': True}}
    
    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user
        
class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInfo
        fields = ('id', 'user', 'dateOfBirth', 'profileImage')

class TaskImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskImage
        fields = ('__all__')