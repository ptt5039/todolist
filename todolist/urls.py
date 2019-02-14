from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static

from todos.views import HomePageView, index


from todos.api.routers import router
from rest_framework.authtoken.views import ObtainAuthToken

urlpatterns = [
#     path('', include('todos.urls')),
#     path('main/', include('todos.urls')),
#     path('profile/', include('todos.urls')),
#     path('help/', include('todos.urls')),
#     path('register/', include('todos.urls')),
#     path('main/tasks/<int>/', include('todos.urls')),
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api/auth/', ObtainAuthToken.as_view()),
    re_path(r'^(?P<path>.*)/$', index),
]

if settings.DEBUG:
    urlpatterns += static(
        settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(
        settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

    try:
        import debug_toolbar
    except ImportError:
        pass
    else:
        urlpatterns += [
            path('__debug__', include(debug_toolbar.urls))
        ]
