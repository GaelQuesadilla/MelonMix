import os
from django.core.management.base import BaseCommand
from django.core.files import File
from audioServer.models import Author, Audio
from django.conf import settings


class Command(BaseCommand):
    help = 'load music from your location'

    def handle(self, *args, **options):
        music_directory = os.environ.get("INITIAL_MUSIC_DIR")
        if music_directory is None:
            self.stdout.write(self.style.ERROR(
                "Error, add INITIAL_MUSIC_DIR to your env_file "))
            return None
        print(music_directory)

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

                self.stdout.write(self.style.SUCCESS(
                    f'Audio created: {title} by {author_name}'))

        self.stdout.write(self.style.SUCCESS(
            'Canciones cargadas exitosamente'))
