from rest_framework import routers

from .viewsets import TodoViewSet, UserViewSet, UserInfoViewSet, TaskImageViewSet

router = routers.DefaultRouter()
router.register('todos', TodoViewSet)
router.register('users', UserViewSet)
router.register('userinfo', UserInfoViewSet)
router.register('taskimage', TaskImageViewSet)