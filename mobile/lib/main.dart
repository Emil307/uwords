import 'package:flutter/material.dart';
import 'package:govorilka/service/RecordingService.dart';
import 'package:govorilka/ui/LoginPage.dart';
import 'package:govorilka/ui/MyHomePage.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      initialRoute: '/',
      // home: MyHomePage(),
      routes: {
        '/': (context) => const LoginPage(),
        '/home': (context) => MyHomePage()
      },
    );
  }
}
