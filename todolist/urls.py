from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static

from todos.views import HomePageView, index


from todos.api.routers import router
from rest_framework.authtoken.views import ObtainAuthToken

urlpatterns = [
    path('', include('todos.urls')),
    path('jet/', include('jet.urls', 'jet')),
    path('jet/dashboard/', include('jet.dashboard.urls', 'jet-dashboard')),
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
