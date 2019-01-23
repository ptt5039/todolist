from rest_framework import routers

from .viewsets import TodoViewSet, UserViewSet, UserInfoViewSet

router = routers.DefaultRouter()
router.register('todos', TodoViewSet)
router.register('users', UserViewSet)
router.register('userinfo', UserInfoViewSet)
