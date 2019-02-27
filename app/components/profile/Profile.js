import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content,Item } from 'native-base';
import styles from './Styles'
export default class Profile extends Component {
    static navigationOptions={
        drawerLabel: 'Profile',
        drawerIcon: ({tintColor}) =>(
            <Icon name="person" style={{fontSize:24,color:'grey'}} />
        )
    }
  render() {
    return (
      
      <Container style={styles.container}>
        <Header style={styles.header} iosBarStyle={"light-content"}>
                    <Left >
                        <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} style={{ color: 'white' }} />
                    </Left>
                    <Body style={{ flex: 1 }}>
                        <Title>Profile</Title>
                    </Body>
                </Header>
                <Content >
                
                   <Icon name="contact" style={{fontSize:150,color:'grey', alignSelf: 'center',marginTop:15}} />
                 
                </Content>
      </Container>
    )
  }
}
