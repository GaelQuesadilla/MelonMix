from django.views.generic import View, TemplateView
from django.http import HttpResponse, FileResponse
from django.shortcuts import redirect, render
from django.conf import settings


class ServeReactView(View):

    def get(self, request, *args, **kwargs):
        try:
            filename = request.path.strip('/')
            print(filename)
            if filename == 'index.html':
                return redirect('/')
            file = open(f'{settings.REACT_BUILD_URL}/{filename}', 'rb')
            return FileResponse(file)
        except Exception:
            return HttpResponse(
                """
            {} not found!
            """.format(request.path), status=501)


class IndexView(TemplateView):
    template_name = 'index.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name)
