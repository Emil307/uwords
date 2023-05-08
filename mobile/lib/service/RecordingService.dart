import 'dart:async';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:govorilka/customComponents.dart';
import 'package:path_provider/path_provider.dart';
import 'package:permission_handler/permission_handler.dart';
import 'package:flutter_sound/flutter_sound.dart';
import 'package:http/http.dart' as http;

class RecordingService {
  var recorder = FlutterSoundRecorder();
  BuildContext context;
  RecordingService(this.context, this.recorder);

  bool isRecording = false;

  void startRecord() async {
    isRecording = true;
    bool isPermissionGranted = await _checkPermission();
    if (isPermissionGranted) {
      recorder.openRecorder();
      recorder.startRecorder(toFile: 'demo');
    }
  }

  void stopRecord() async {
    isRecording = false;
    recorder.stopRecorder();
    var url = await recorder.stopRecorder().then((value) => value);
    //recorder.closeRecorder();
    submitRecord(url);
  }

  void submitRecord(dynamic url) async {
    showDialog(
      context: context,
      builder: (context) => CustomComponents().customDialog(context, url),
    );
  }

  static void setRecordInAPI(String url) async {
    print(url);
    final response = await http.get(Uri.parse(url));
    if(response.statusCode == 201){

    }
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
