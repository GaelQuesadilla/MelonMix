from django.contrib import admin
from .models import Audio, Author

# Register your models here.


class AudioAdmin(admin.ModelAdmin):
    pass


admin.site.register(Audio, AudioAdmin)


class AuthorAdmin(admin.ModelAdmin):
    pass


admin.site.register(Author, AuthorAdmin)
