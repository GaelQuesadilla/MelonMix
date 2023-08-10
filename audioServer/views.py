from django.views import View
from django.core.serializers import serialize
from django.http import FileResponse, JsonResponse
from .models import Audio
import json


class AudioView(View):

    def get(self, request, *args, **kwargs):
        audio_name = kwargs['audio_name']
        return FileResponse(open(f'media/audio/{audio_name}', 'rb'))


class GetDataView(View):
    def get(self, request, *args, **kwargs):
        max_results = self.request.GET.get("max_results")
        title = self.request.GET.get("title")
        author = self.request.GET.get("author")
        tags = self.request.GET.get("tags")
        initial_index = self.request.GET.get("initial_index")

        if max_results is None or int(max_results) <= 0:
            max_results = 10
        else:
            max_results = int(max_results)

        if tags:
            tags = tags.split(",")

        if initial_index is None or int(initial_index) < 0:
            initial_index = 0
        else:
            initial_index = int(initial_index)

        queryset = Audio.objects.all()

        if title:
            queryset = queryset.filter(title__icontains=title)
        if author:
            queryset = queryset.filter(author__author__icontains=author)
        if tags:
            queryset = queryset.filter(tags__name__in=tags)

        results = list(queryset.order_by('id')[initial_index:][:max_results])
        serialized_results = []
        for result in results:
            print(result.title)
            serialized_result = {
                "name": result.title,
                "artist": result.author.author,
                "url": result.audio.url,
                "tags": list(result.tags.names()),
                "id": result.pk
            }
            serialized_results.append(serialized_result)
        response = {
            "results": serialized_results,
            "search": self.request.GET}
        return JsonResponse(response, safe=False)
