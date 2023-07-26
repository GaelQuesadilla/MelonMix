from django.views.generic import TemplateView
from django.shortcuts import render
from django.http import FileResponse


class index(TemplateView):
    template_name = 'index.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name, {})


def favicon(request):
    return FileResponse(open('frontend/build/favicon.ico', 'rb'))


def manifest(request):
    return FileResponse(open('frontend/build/manifest.json', 'rb'))


def logo192(request):
    return FileResponse(open('frontend/build/logo192.png', 'rb'))


def logo512(request):
    return FileResponse(open('frontend/build/logo512.png', 'rb'))
