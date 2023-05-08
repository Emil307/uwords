import 'dart:convert';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:build_runner/build_runner.dart';
import 'package:json_annotation/json_annotation.dart';

part 'auth.g.dart';

@JsonSerializable()
class User {
  User(this.name, this.surname, this.email, this.password,this.id, {this.createdAt, this.role});
  String name;
  String surname;
  String email;
  String password;
  int id;
  DateTime? createdAt;
  String? role;

  factory User.fromJson(Map<String, dynamic> json) => _$UserFromJson(json);

  Map<String, dynamic> toJson() => _$UserToJson(this);
}

Future<http.Response> addNewUser(User user) async {
  return http.post(
    Uri.parse(
      'http://localhost:8000/api/v1/auth/users/',),
    body: jsonEncode(user.toJson()),
  );
}

Future<dynamic> getToken(User user) async {
  final response = await http.post(
    Uri.parse(
      'http://localhost:8000/auth/token/login/',
    ),
    body: jsonEncode(<String,String>{
      'email': user.email,
      'password': user.password
    }),
  );
  if(response.statusCode ==201){
    return jsonDecode(response.body);
  } else {
    throw const HttpException('Failed to get token');
  }
}

Future<User> getUserByToken(String token) async{
  final response = await http.get(
    Uri.parse(
      'http://localhost:8000/api/v1/auth/users/me'
    ),
    headers: {'Authorization' : token}
  );
  if(response.statusCode == 201){
    return User.fromJson(jsonDecode(response.body) as Map<String,dynamic>);
  } else {
    throw const HttpException('Failed to get User by token');
  }
}

Future<User> getUserByID(int id) async{
  final response = await http.get(
    Uri.parse(
      'http://localhost:8000/api/v1/users/$id'
    ),
  );
  if(response.statusCode == 201){
    return User.fromJson(jsonDecode(response.body) as Map<String,dynamic>);
  } else{
    throw const HttpException('Failed to get user by ID');
  }
}

Future<List<dynamic>> getAllUsers() async{
  final response = await http.get(
    Uri.parse(
      'http://localhost:8000/api/v1/users'
    ),
  );
  if(response.statusCode == 201){
    return jsonDecode(response.body) as List<User>;
  } else{
    throw const HttpException('Failed to get all users');
  }
}

Future<String> deleteUser(int id) async {
  final response = await http.delete(
    Uri.parse(
      'http://localhost:8000/api/v1/users/$id'
    ),
  );
  if(response.statusCode == 201){
    return jsonDecode(response.body).toString();
  } else{
    throw const HttpException('Failed to delete user');
  }
}