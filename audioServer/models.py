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
    default_cover = 'media/default/covers/default_cover.png'

    title = models.CharField(max_length=255, blank=False, null=False)
    created_on = models.DateField(auto_now_add=True, blank=False, null=False)
    author = models.ForeignKey(
        Author, on_delete=models.CASCADE, related_name='audios')
    uploaded_by = models.TextField()
    audio = models.FileField(blank=True, null=False, upload_to='media/audio')
    tags = TaggableManager()
    cover_image = models.ImageField(
        blank=False, null=False, upload_to='media/covers', default=default_cover)
    lazy_cover_image = models.ImageField(
        blank=True, null=True, upload_to='media/covers')

    def save(self, *args, **kwargs):
        if self.cover_image:
            tmp_image = Image.open(self.cover_image)
            cover_image = tmp_image.copy()
            lazy_cover_image = tmp_image.copy()
            tmp_image.close()

            extension = self.cover_image.name.split(".")[-1]

            # Cover in 500px - 500px
            cover_image.thumbnail((500, 500), Image.LANCZOS)
            cover_image_io = BytesIO()
            cover_image.save(cover_image_io, format=extension)

            # Delete old images before saving new ones
            if self.pk:  # Only if the object has been saved before
                old_instance = Audio.objects.get(pk=self.pk)
                old_instance.cover_image.delete()
                old_instance.lazy_cover_image.delete()
            if self.cover_image.name != self.default_cover:  # Only if it isn't the default cover file
                self.cover_image.delete()

            self.cover_image.save(
                f"cover-{self.pk}.{extension}", content=File(cover_image_io), save=False)

            # Lazy cover in 30px - 30px
            lazy_cover_image.thumbnail((30, 30), Image.LANCZOS)
            lazy_cover_image_io = BytesIO()

            lazy_cover_image.save(lazy_cover_image_io, format=extension)
            # self.lazy_cover_image.delete()
            self.lazy_cover_image.save(
                f"lazy_cover-{self.pk}.{extension}", content=File(lazy_cover_image_io), save=False)

        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['created_on']
