import os
from django.core.management.base import BaseCommand
from django.core.files import File
from audioServer.models import Author, Audio
from django.conf import settings
from google_images_search import GoogleImagesSearch
import requests
from io import BytesIO
from PIL import Image


class Command(BaseCommand):
    help = 'load music from your location'

    def get_cover_url(self, author, title):
        try:
            return self.search_cover_url(author, title)
        except Exception as e:
            print(f"Unexpected error: {e}")
            return None

    def search_cover_url(self, author, title):
        query = f'"{author}" "{title}" "cover art" OR "album cover" OR "single cover" OR "Song" OR "Spotify"'

        gis = GoogleImagesSearch(
            settings.GOOGLE_API_KEY, settings.GOOGLE_API_CX)
        search_params = {
            'q': query,
            'num': 1,
            'fileType': 'jpg|png',
        }

        gis.search(search_params=search_params)
        for image in gis.results():
            return image.url
        return None

    def handle(self, *args, **options):
        music_directory = os.environ.get("INITIAL_MUSIC_DIR")
        if music_directory is None:
            self.stdout.write(self.style.ERROR(
                "Error, add INITIAL_MUSIC_DIR to your env_file "))
            return None
        print(f"Get music from {music_directory} dir")

        for filename in os.listdir(music_directory):
            if filename.endswith(".mp3"):
                author_name, title = filename.split("-", 1)
                title = title.replace(".mp3", "")
                author, created = Author.objects.get_or_create(
                    author=author_name)

                audio = Audio.objects.create(
                    title=title,
                    author=author,
                    uploaded_by="Shell"
                )

                file_path = os.path.join(music_directory, filename)
                with open(file_path, 'rb') as audio_file:
                    audio.audio.save(filename, File(audio_file))
                audio.save()

                cover_image_url = self.get_cover_url(
                    author=author_name, title=title)
                if cover_image_url:
                    response = requests.get(cover_image_url)
                    if response.status_code == 200:
                        img = Image.open(BytesIO(response.content))
                        output_io = BytesIO()
                        img.save(output_io, format="PNG")
                        output_io.seek(0)
                        audio.cover_image.save(
                            f'{author_name} - {title}.png', File(output_io))

                self.stdout.write(self.style.SUCCESS(
                    f'Audio created: {title} by {author_name}'))

        self.stdout.write(self.style.SUCCESS(
            'Music loaded'))
