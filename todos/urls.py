from django.urls import path
from todos import views
 
urlpatterns = [
    path('', views.HomePageView.as_view()),
    path('main/', views.HomePageView.as_view()),
    path('profile/', views.HomePageView.as_view())
]