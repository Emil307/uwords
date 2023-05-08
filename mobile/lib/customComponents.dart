import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:flutter/material.dart';
import 'package:govorilka/service/RecordingService.dart';

class CustomComponents {
  Widget customDialog(BuildContext context, dynamic url) {
    return AlertDialog(
      content: Text('Save this Record?'),
      actions: <Widget>[
        ElevatedButton(
          style: const ButtonStyle(
            backgroundColor: MaterialStatePropertyAll<Color>(Color.fromARGB(255, 219, 217, 217),),
          ),
          onPressed: () {
            Navigator.of(context).pop();
          },
          child: Text('cancel'),
        ),
        ElevatedButton(
          onPressed: () {
            //TODO: сабмит в бек
            RecordingService.setRecordInAPI(url.toString());
            Navigator.of(context).pop();
          },
          child: Text('OK'),
        ),  
      ],
    );
  }
}
