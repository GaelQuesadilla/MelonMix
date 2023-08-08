from django.urls import path
from .views import AudioView, GetDataView
from .apps import AudioserverConfig


app_name = AudioserverConfig.name
urlpatterns = [
    path('audio/<audio_name>', AudioView.as_view(), name='audio view'),
    path('get/', GetDataView.as_view(), name='get data view'),

]
