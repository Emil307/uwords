from bigNose.views import UserAPIView, WordsCategoriesAPIView, WordAPIView, DownloadAudioAPIView
from django.contrib import admin
from django.urls import path, include, re_path

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/v1/users", UserAPIView.as_view()),
    path("api/v1/users/<int:pk>", UserAPIView.as_view()),
    path("api/v1/word-categories", WordsCategoriesAPIView.as_view()),
    path("api/v1/word-categories/<int:pk>", WordsCategoriesAPIView.as_view()),
    path("api/v1/download-audio", DownloadAudioAPIView.as_view()),
    path("api/v1/word", WordAPIView.as_view()),
    path("api/v1/word/<int:pk>", WordAPIView.as_view()),
    path("api/v1/auth/", include("djoser.urls")),
    re_path(r"^auth/", include("djoser.urls.authtoken"))
]