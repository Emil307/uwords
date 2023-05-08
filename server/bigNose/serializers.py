from rest_framework import serializers
from django.contrib.auth import get_user_model
from bigNose.models import WordsCategories, Word
from djoser.serializers import UserCreateSerializer

User = get_user_model()


class UserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ["id", "email", "name", "surname", "created_at"]

    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass


class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "name", "surname", "created_at"]


class WordsCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = WordsCategories
        fields = "__all__"


class WordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Word
        fields = "__all__"

