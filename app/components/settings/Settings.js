import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class Settings extends Component {
    static navigationOptions={
        drawerLabel: 'Settings',
        drawerIcon: ({tintColor}) =>(
            <Icon name="settings" style={{fontSize:24,color:'grey'}} />
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
