from django.views import View
from django.http import FileResponse


class AudioView(View):

    def get(self, request, *args, **kwargs):
        audio_name = kwargs['audio_name']
        return FileResponse(open(f'media/audio/{audio_name}', 'rb'))
