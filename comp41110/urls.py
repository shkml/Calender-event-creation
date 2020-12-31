from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='cal-home'),
    path('eventForm/', views.createEvent, name='event-creation'),
    path('fetchEvent/', views.fetchEvents, name='fetch-event'),
    path('deleteEvent/<str:pk>/', views.deleteEvent, name='delete-event')
]