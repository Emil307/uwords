import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:flutter/material.dart';
import 'package:permission_handler/permission_handler.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    //boolka
    if(Permission.microphone.status != PermissionStatus.granted && Permission.storage.status != PermissionStatus.granted ){
      Permission.microphone.request();
      Permission.storage.request();
    }
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color.fromARGB(255, 238, 61, 61),
        title: const Center(
          child: Text('Log In'),
        ),
      ),
      body: Column(
        children: <Widget>[
          Form(
            child: Column(
              children: [
                TextFormField(
                  decoration: const InputDecoration(
                    hoverColor: const Color.fromARGB(255, 238, 61, 61),
                    border: OutlineInputBorder(
                      borderSide: BorderSide(
                        color: Color.fromARGB(255, 250, 84, 84),
                      ),
                    ),
                    hintText: 'enter your ID here',
                  ),
                  cursorColor: const Color.fromARGB(255, 238, 61, 61),
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
                Center(
                  child: TextButton(
                    style: const ButtonStyle(
                        backgroundColor: MaterialStatePropertyAll<Color>(
                      Color.fromARGB(255, 219, 217, 217),
                    )),
                    child: const Text(
                      'No account? Register',
                      style: TextStyle(color: Colors.black),
                    ),
                    onPressed: () => showDialog(
                      context: context,
                      builder: (context) => AlertDialog(
                        content: Column(
                          children: [
                            TextFormField(
                              decoration: const InputDecoration(
                                  helperText: 'Create your ID',
                                  hoverColor:
                                      const Color.fromARGB(255, 238, 61, 61)),
                              cursorColor:
                                  const Color.fromARGB(255, 238, 61, 61),
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
                    ),
                  ),
                )
              ],
            ),
          ),
        ],
      ),
    );
  }
}
