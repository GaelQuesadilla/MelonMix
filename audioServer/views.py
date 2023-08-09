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

        if max_results is None or int(max_results) <= 0:
            max_results = 10
        else:
            max_results = int(max_results)

        if tags is not None:
            tags = tags.split(",")
        queryset = Audio.objects.all()

        if title:
            queryset = queryset.filter(title__icontains=title)
        if author:
            queryset = queryset.filter(author__author__icontains=author)
        if tags:
            queryset = queryset.filter(tags__name__in=tags)

        results = list(queryset.order_by('id')[:max_results])
        serialized_results = []
        for result in results:
            print(result.title)
            serialized_result = {
                "title": result.title,
                "author": result.author.author,
                "url": result.audio.url,
                "tags": list(result.tags.names())
            }
            serialized_results.append(serialized_result)
        response = {
            "result": serialized_results,
            "search": self.request.GET}
        return JsonResponse(response, safe=False)
