import React, { Component } from 'react'
import { Text, View,Image,ScrollView } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Label,Input, Icon, Title, Content,Item, Form,Textarea } from 'native-base';
import styles from './Styles'
export default class Profile extends Component {
    static navigationOptions={
        drawerLabel: 'Profile',
        header: null,
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
                <Icon name="contact" style={{fontSize:150,color:'grey', alignSelf: 'center',marginTop:15}} />
                <Content contentContainerStyle={{height:'100%'}}>
                <ScrollView>
                   
                 <Form style={{alignSelf:'center',marginBottom: 30}}>
                 <Label>First Name :</Label>
                   <Item stackedLabel>
                   
                   <Input placeholder='' />
                   </Item>
                   <Label>Last Name :</Label>
                   <Item stackedLabel>
                   
                   <Input placeholder='' />
                   </Item>
                   <Label>Email :</Label>
                   <Item stackedLabel>
                   
                   <Input placeholder='' />
                   </Item>
                   <Label>Mobile :</Label>
                   <Item stackedLabel>
                  
                   <Input placeholder='' />
                   </Item>
                   
                   <Label>Address :</Label>
                   <Textarea rowSpan={4} bordered placeholder="" />
                  
                   <View style={{justifyContent:'center',
                     alignItem:'center',flexDirection:'row'}}>
                   <Button rounded style={{
                     top: 15, alignSelf: 'center',
                     width: 80,
                     justifyContent:'center',
                     alignItem:'center'}}>
                     <Text style={{color:'white'}}>Save</Text>
                     </Button>

                     <Button rounded style={{
                     top: 15,marginLeft:10, alignSelf: 'center',
                     width: 80,
                     justifyContent:'center',
                     alignItem:'center'}}>
                     <Text style={{color:'white'}}>Edit</Text>
                     </Button>
                     </View>
                 </Form>
                 </ScrollView>
                </Content>
      </Container>
    )
  }
}
