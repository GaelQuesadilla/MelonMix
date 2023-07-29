"""
URL configuration for spotifyClone project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from .views import Index, Favicon, Manifest, Logo192, Logo512


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', Index.as_view(), name='index'),
    path('favicon.ico', Favicon.as_view(), name='favicon'),
    path('manifest.json', Manifest.as_view(), name='manifest'),
    path('logo192.png', Logo192.as_view(), name='logo192'),
    path('logo512.png', Logo512.as_view(), name='logo512'),
    path('media/', include('audioServer.urls'))
]
