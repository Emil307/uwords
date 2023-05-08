import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:flutter/material.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Log in'),
      ),
      body: Column(
        children: <Widget>[
          Form(
            child: Column(
              children: [
                TextFormField(
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Enter your ID';
                    }
                    return null;
                  },
                  onFieldSubmitted: (value) {
                    if (value.isNotEmpty) {
                      Navigator.of(context).pushNamed('/home');
                    }
                  },
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
