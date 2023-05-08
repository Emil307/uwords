import 'package:flutter/material.dart';
import 'package:flutter_sound/flutter_sound.dart';
import 'package:govorilka/service/RecordingService.dart';
import 'package:permission_handler/permission_handler.dart';

class MyHomePage extends StatefulWidget {
  MyHomePage({
    super.key,
  });
  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    var recorder = FlutterSoundRecorder();
    RecordingService recorderService = RecordingService(context, recorder);
    bool isRecording = false;

    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color.fromARGB(255, 238, 61, 61),
        title: const Text('Speech recorder'),
      ),
      body: Center(
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            FloatingActionButton.large(
              heroTag: 'btn1',
              onPressed: () {
                setState(() {
                  isRecording = false;
                  recorderService.stopRecord();
                });
              },
              backgroundColor: Colors.grey,
              child: const Icon(Icons.pause),
            ),
            const Divider(thickness: 12,),
            FloatingActionButton.large(
              heroTag: 'btn2',
              onPressed: () {
                setState(() {
                  isRecording = true;
                  recorderService.startRecord();
                });
              },
              backgroundColor: const Color.fromARGB(255, 236, 85, 85),
              child: const Icon(Icons.play_arrow),
            ),
          ],
        ),
      ),
    );
  }
}
