import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class MyOrder extends Component {
    static navigationOptions={
        drawerLabel: 'My Order',
        drawerIcon: ({tintColor}) =>(
            <Icon name="ios-share" style={{fontSize:24,color:'grey'}} />
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
