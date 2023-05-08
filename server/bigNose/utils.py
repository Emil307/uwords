import requests
import yadisk
import pymorphy3
import speech_recognition
from translate import Translator


def download_audio(dirpath, filename):
    yan = yadisk.YaDisk(token='y0_AgAAAABAnEzFAAnfRAAAAADip3jGxHPQ5oLDQwGQC6nk5qSGBcHrBp8')
    yan.download(dirpath, filename)
    return True


def speech_to_text(audiofile, textfile):
    rec = speech_recognition.Recognizer()
    audio_file = speech_recognition.AudioFile(audiofile)

    with audio_file as source:
        rec.adjust_for_ambient_noise(source, duration=0.2)
        audio = rec.record(source)

    result = rec.recognize_google(audio, language='ru')

    with open(f'{textfile}', mode='w', encoding='utf-8') as file:
        file.write(result)

    return result


def clear_text(text):
    def pos(wordPos, morth=pymorphy3.analyzer.MorphAnalyzer()):
        return morth.parse(wordPos)[0].tag.POS

    words = text.lower().split()
    functors_pos = {'INTJ', 'PRCL', 'CONJ', 'PREP'}
    out_text = []
    for word in words:
        if pos(word) not in functors_pos:
            out_text.append(word)

    return out_text


def normalizeWords(words):
    normWords = []
    for word in words:
        normWords.append(pymorphy3.analyzer.MorphAnalyzer().parse(word)[0].normal_form)

    return normWords


def wordsFrequency(words):
    wordsDict = {}
    for word in words:
        if word not in wordsDict.keys():
            wordsDict[word] = 1
        else:
            wordsDict[word] += 1

    wordsOut = dict(sorted(wordsDict.items(), key=lambda x: x[1], reverse=True))

    return wordsOut


def wordTranslate(words):
    translator = Translator(from_lang="russian", to_lang="english")
    wordsTranslated = {}
    for word in words:
        try:
            if word not in wordsTranslated.keys():
                translated = translator.translate(word)
                if any(char in translated.lower() for char in ['.', ',', '?', '-']):
                    if any(char in translated.lower() for char in ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                                                                   'k', 'l', 'm', 'n', 'o' 'p', 'q', 'r', 's', 't',
                                                                   'u', 'v', 'w', 'x', 'y', 'z']):
                        wordsTranslated[word] = [words[word], translated.lower()]
                else:
                    if any(char in translated.lower() for char in ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш',
                                                                   'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п',
                                                                   'р', 'о', 'л', 'д', 'ж', 'э', 'я',
                                                                   'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'ё']):
                        continue
                    else:
                        wordsTranslated[word] = [words[word], translated.lower()]
            else:
                continue
        except:
            pass

    return wordsTranslated


def createAudio():
    url = 'https://app.beyondwords.io/api/v4/projects/{project_id}/audio'
    params = {
        "project_id": "28700"
    }

    data = {
        "body": f"Hello",
        "title": "",
        "external_id": "1",
        "author": "Danone",
        "article_url": "",
        "publish_date": "",
        "published": True,
        "metadata": {
            "key": "write_314ee35d7ed9638beb6c44d811bca386"
        }
    }
    req = requests.post(url, data=data, params=params)
    print(req.content)


createAudio()