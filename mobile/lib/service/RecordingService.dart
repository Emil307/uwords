import 'dart:io';
import 'package:flutter/material.dart';
import 'package:permission_handler/permission_handler.dart';
import 'package:record_mp3/record_mp3.dart';
import 'dart:async';
import 'package:path_provider/path_provider.dart';
import 'package:govorilka/customComponents.dart';

class RecordingService {
  BuildContext context;
  RecordingService(this.context);

  bool isRecording = false;

  void startrecord() async {
    print('-----recording started-----');
    bool isPermissionGranted = await _checkPermission();
    if (isPermissionGranted) {
      isRecording = true;
      RecordMp3.instance.start(
        await getFilePath(),
        (type) => throw Exception('error ocused when starting'),
      );
    }
  }

  void stopRecord() async {
    print('-----recording stopped-----');
    RecordMp3.instance.stop();
    isRecording = false;
    showDialog(
      context: context,
      builder: (context) => CustomComponents().customDialog(context),
    );
  }

  void submitRecord() async {
    //TODO: сабмит записи + setRecordInAPI
  }

  void setRecordInAPI() async {
    //TODO: метод который закидывает запись в бек
  }

  Future<String> getFilePath() async {
    final Directory storageDirectory = await getApplicationDocumentsDirectory();
    final String sdPath = '${storageDirectory.path}/record';
    final Directory d = Directory(sdPath);
    if (!d.existsSync()) {
      d.createSync(recursive: true);
    }
    return '$sdPath/demo.mp3';
  }

  Future<bool> _checkPermission() async {
    if (!await Permission.microphone.isGranted) {
      PermissionStatus status = await Permission.microphone.request();
      if (status.isGranted) {
        return true;
      }
    }
    return true;
  }
}
