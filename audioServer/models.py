from django.db import models
from taggit.managers import TaggableManager


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

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['created_on']
