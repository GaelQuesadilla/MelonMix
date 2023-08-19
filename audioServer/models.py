from django.db import models
from taggit.managers import TaggableManager
from io import BytesIO
from PIL import Image
from django.core.files import File


# Create your models here.


class Author(models.Model):
    author = models.CharField(
        max_length=255, blank=False, null=False, unique=True)

    def __str__(self):
        return self.author

    class Meta:
        ordering = ['author']


class Audio(models.Model):
    title = models.CharField(max_length=255, blank=False, null=False)
    created_on = models.DateField(auto_now_add=True, blank=False, null=False)
    author = models.ForeignKey(
        Author, on_delete=models.CASCADE, related_name='audios')
    uploaded_by = models.TextField()
    audio = models.FileField(blank=True, null=False, upload_to='media/audio')
    tags = TaggableManager()
    cover_image = models.ImageField(
        blank=False, null=False, upload_to='media/covers', default='media/default/covers/default_cover.png')
    lazy_cover_image = models.ImageField(
        blank=True, null=True, upload_to='media/lazy_covers')

    def save(self, *args, **kwargs):
        if self.cover_image:
            cover_image = Image.open(self.cover_image.path)

            cover_image.thumbnail((500, 500), Image.LANCZOS)
            cover_image_io = BytesIO()
            cover_image.save(cover_image_io, format='JPEG')
            self.cover_image.save(self.cover_image.name,
                                  content=File(cover_image_io), save=False)

            lazy_cover_image = cover_image.copy()
            lazy_cover_image.thumbnail((20, 20), Image.LANCZOS)
            lazy_cover_image_io = BytesIO()
            lazy_cover_image.save(lazy_cover_image_io, format='JPEG')
            self.lazy_cover_image.save(
                self.cover_image.name, content=File(lazy_cover_image_io), save=False)

        super(Audio, self).save(*args, **kwargs)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['created_on']
