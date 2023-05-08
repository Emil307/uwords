import datetime
import os
import yadisk
from rest_framework import views
from .utils import speech_to_text, download_audio, clear_text, wordsFrequency, normalizeWords, wordTranslate
from dotenv import load_dotenv, find_dotenv
from rest_framework.response import Response
from .models import User, WordsCategories, Word
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import UserSerializer, WordsCategorySerializer, WordSerializer


load_dotenv(find_dotenv())
YANDEX_OAUTH = os.environ.get('YANDEX_OAUTH')

yan = yadisk.YaDisk(token=YANDEX_OAUTH)


class UserAPIView(views.APIView):
    permission_classes = [AllowAny]
    # authentication_classes = [TokenAuthentication]

    #  Получение объекта пользователя или массива объектов пользователей
    def get(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)

        #  Получение всех пользователей
        if not pk:
            return Response(UserSerializer(User.objects.all(), many=True).data)

        #  Получение определённого пользователя по его ID
        try:
            return Response(UserSerializer(User.objects.get(id=self.kwargs["pk"])).data)

        except:
            return Response({"ERROR": f"Пользователя с ID: {self.kwargs['pk']} не существует"})

    #  Удаление пользователя
    def delete(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        if not pk:
            return Response({"ERROR": "Не указан ID пользователя"})

        try:
            User.objects.filter(pk=pk).delete()
        except:
            return Response({"ERROR": f"Пользователя с ID: {self.kwargs['pk']} не существует"})

        return Response(f'Пользователь с ID: {self.kwargs["pk"]} успешно удален')


class WordsCategoriesAPIView(views.APIView):
    permission_classes = [AllowAny]
    authentication_classes = [TokenAuthentication]

    def get(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)

        if not pk:
            return Response(WordsCategorySerializer(WordsCategories.objects.all(), many=True).data)

        try:
            return Response(WordsCategorySerializer(WordsCategories.objects.filter(userID=self.kwargs["pk"]), many=True).data)

        except:
            return Response({"ERROR": f"У пользователя с ID: {self.kwargs['pk']} нет категорий слов"})

    def post(self, request):
        serializer = WordsCategorySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(f"Новая категория {serializer.data['title']} добавлена")

    def put(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)

        if not pk:
            return Response({"ERROR": "Не указан ID категории"})

        try:
            instance = WordsCategories.objects.get(pk=pk)

        except:
            return Response({"ERROR": f"Категории с ID: {pk} не существует"})

        serializer = WordsCategorySerializer(data=request.data, instance=instance)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(f"Категория {pk} успешно обновлена")

    def delete(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)

        if not pk:
            return Response({"ERROR": "Не указан ID категории"})

        try:
            WordsCategories.objects.filter(pk=pk).delete()

        except:
            return Response({"ERROR": "Указанный ID категории не существует"})

        return Response(f"Категория {pk} успешно удалена")


class WordAPIView(views.APIView):
    permission_classes = [AllowAny]
    authentication_classes = [TokenAuthentication]

    def get(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)

        if not pk:
            return Response(WordSerializer(Word.objects.all(), many=True).data)

        try:
            return Response(
                WordSerializer(Word.objects.filter(wordsID_id=self.kwargs["pk"]), many=True).data)

        except:
            return Response(f"Категория пуста...")

    def post(self, request):
        serializer = WordSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(f'Новое слово добавлено, его ID: {serializer.data["id"]}')

    def put(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        if not pk:
            return Response({"ERROR": "Не указан ID слова"})

        try:
            instance = Word.objects.get(pk=pk)
        except:
            return Response({"ERROR": f"Слова с ID: {pk} не существует"})

        serializer = WordSerializer(data=request.data, instance=instance)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(f'Слово {self.kwargs["pk"]} ({serializer.data["value"]}) успешно обновлено')

    def delete(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        if not pk:
            return Response({"ERROR": "Не указан ID слова"})

        try:
            Word.objects.filter(pk=pk).delete()
        except:
            return Response({"ERROR": "Слова с указанным ID не существует"})

        return Response(f'Слово {self.kwargs["pk"]} успешно удалено')


class DownloadAudioAPIView(views.APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response({"Метод GET не поддерживается"})

    def post(self, request):
        if request.data:
            userID = request.data['userID']
            audio = request.data['audioLink']

            audiofile = os.path.abspath(__file__).replace(os.path.basename(__file__), '') + f'audio/user{userID}.wav'

            if download_audio(audio, audiofile):
                textfile = os.path.abspath(__file__).replace(os.path.basename(__file__), '') + f'audio/user{userID}.txt'
                text = speech_to_text(audiofile, textfile)
                clearedText = clear_text(text)
                normWords = normalizeWords(clearedText)
                dictWordsByFrequency = wordsFrequency(normWords)
                translatedWords = wordTranslate(dictWordsByFrequency)

                os.remove(audiofile)

                wordsTitle = f'Recomended {userID} {datetime.datetime.now()}'

                words = WordsCategories()
                words.title = wordsTitle
                words.userID_id = userID
                words.progress = 0
                words.save()

                wordsID = WordsCategories.objects.get(title=wordsTitle).id

                for trWord in translatedWords:
                    word = Word()
                    word.wordsID_id = wordsID
                    word.value = trWord
                    word.translate = translatedWords[trWord][1]
                    word.count = translatedWords[trWord][0]
                    word.save()

                return Response(WordSerializer(Word.objects.filter(wordsID_id=wordsID), many=True).data)

