from django.urls import path
from .views import AudioView
from .apps import AudioserverConfig


app_name = AudioserverConfig.name
urlpatterns = [
    path('audio/<audio_name>', AudioView.as_view(), name='index'),
]
