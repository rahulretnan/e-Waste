import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class MyProduct extends Component {
    static navigationOptions={
        drawerLabel: 'My Product',
        drawerIcon: ({tintColor}) =>(
            <Icon name="hammer" style={{fontSize:24,color:'grey'}} />
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