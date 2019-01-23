from .serializers import TodoSerializer, UserSerializer, UserInfoSerializer
from todos.models import Todo, UserInfo
from django.contrib.auth.models import User

from rest_framework import viewsets
from rest_framework.decorators import action, api_view
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django_filters import rest_framework as filters
import django_filters.rest_framework
from rest_framework import generics
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)

class TodoFilter(filters.FilterSet):
    title = filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Todo
        fields = ('id', 'title', 'user')

class UserFilter(filters.FilterSet):
    
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'is_superuser')

class UserInfoFilter(filters.FilterSet):

    class Meta:
        model = UserInfo
        fields = ('user','dateOfBirth')

class TodoViewSet(viewsets.ModelViewSet):

    # list, create, retrieve, update, partial_update, destroy
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    filterset_class = TodoFilter
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    
    @action(methods=['get'], detail=False)
    def newest(self, request):
        newest = self.get_queryset().order_by('id').last()
        serializer = self.get_serializer_class()(newest)
        return Response(serializer.data)
   
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filterset_class = UserFilter
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

class UserInfoViewSet(viewsets.ModelViewSet):
    queryset = UserInfo.objects.all()
    serializer_class = UserInfoSerializer
    filterset_class = UserInfoFilter
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)