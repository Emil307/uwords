from django.contrib import admin
from bigNose.models import User, WordsCategories, Word

# Register your models here.
admin.site.register(User)
admin.site.register(Word)
admin.site.register(WordsCategories)
