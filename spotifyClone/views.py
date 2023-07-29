from django.views.generic import TemplateView
from django.views import View
from django.shortcuts import render
from django.http import FileResponse


class Index(TemplateView):
    template_name = 'index.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name, {})


class Favicon(View):
    def get(self, request,  *args, **kwargs):
        return FileResponse(open('frontend/build/favicon.ico', 'rb'))


class Manifest(View):
    def get(self, request,  *args, **kwargs):
        return FileResponse(open('frontend/build/manifest.json', 'rb'))


class Logo192(View):
    def get(self, request,  *args, **kwargs):
        return FileResponse(open('frontend/build/logo192.png', 'rb'))


class Logo512(View):
    def get(self, request,  *args, **kwargs):
        return FileResponse(open('frontend/build/logo512.png', 'rb'))
