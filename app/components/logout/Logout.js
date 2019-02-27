import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class Logout extends Component {
    static navigationOptions={
        drawerLabel: 'Logout',
        drawerIcon: ({tintColor}) =>(
            <Icon name="ios-log-out" style={{fontSize:24,color:'grey'}} />
        )
    }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
