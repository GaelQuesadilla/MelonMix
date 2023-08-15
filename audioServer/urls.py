from django.urls import path, re_path
from .views import AudioView, GetDataView, GetMediaFile
from .apps import AudioserverConfig


app_name = AudioserverConfig.name
urlpatterns = [
    path('get/', GetDataView.as_view(), name='get data view'),
    re_path('^.*', GetMediaFile.as_view(), name="get media file"),


]
