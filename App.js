import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  Button
}
  from 'react-native';
import Register from './app/components/register/Register';
import Login from './app/components/login/Login'
import Home from './app/components/home/Home'
import Result from './app/components/result/Result'
export default class App extends React.Component {
  render() {
    return (
      <Result />

    );
  }
}
