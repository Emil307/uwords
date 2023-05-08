from django.db import models
from bigNose.managers import UserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    surname = models.CharField(max_length=100, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_superuser = models.BooleanField(blank=True, default=False)
    is_staff = models.BooleanField(blank=True, default=False)
    is_active = models.BooleanField(blank=True, default=True)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ("id", "name", "surname", "is_superuser", "created_at")

    def __str__(self):
        return f'UserID {self.id}: {self.name} {self.surname} | {self.email}'


class WordsCategories(models.Model):
    title = models.CharField(max_length=255)
    userID = models.ForeignKey(User, on_delete=models.CASCADE)
    progress = models.IntegerField(blank=True, null=True)
    isArchived = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'WordsCatID {self.id}: {self.title} | {self.userID.id} - {self.userID.name} | isArchived: {self.isArchived}'


class Word(models.Model):
    wordsID = models.ForeignKey(WordsCategories, on_delete=models.CASCADE)
    value = models.CharField(max_length=255)
    translate = models.CharField(max_length=255)
    count = models.IntegerField()
    img = models.CharField(max_length=255, blank=True, null=True)
    transcription = models.CharField(max_length=255, blank=True, null=True)
    isLearned = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'WordID {self.id} | {self.wordsID.id} | {self.value} - {self.translate} | isLearned: {self.isLearned}'