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
import Register from './app/components/Register';
import Login from './app/components/Login'
import Home from './app/components/Home'
import Result from './app/components/Result'
export default class App extends React.Component {
  render() {
    return (
      <Login />

    );
  }
}
