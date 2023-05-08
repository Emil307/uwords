import 'package:flutter/material.dart';
import 'package:govorilka/service/RecordingService.dart';
import 'package:permission_handler/permission_handler.dart';

class MyHomePage extends StatefulWidget {
  MyHomePage({
    super.key,
  });
  int _index = 0;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    RecordingService recorderService = RecordingService(context);
    Permission.microphone.request();
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color.fromARGB(255, 238, 61, 61),
        title: const Text('Speech recorder'),
      ),
      body: Center(
        child: Column(
          children: [
            Text('Try to record your speech'),
            Expanded(
              child: FloatingActionButton(
                onPressed: () {
                  setState(() {
                    recorderService.isRecording
                        ? recorderService.stopRecord()
                        : recorderService.startrecord();
                  });
                },
                backgroundColor: const Color.fromARGB(255, 236, 85, 85),
                child: Icon(
                  recorderService.isRecording ? Icons.pause : Icons.play_arrow,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
