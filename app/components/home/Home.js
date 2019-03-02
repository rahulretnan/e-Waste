import React, { Component } from 'react'
import {
    Text
}
    from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Item, Input, Content, View } from 'native-base';
import styles from './Styles'
import { colors } from 'react-native-elements';
import Drawer from '../navigation/Drawer'
export default class Home extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        header: null,
        drawerIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{ fontSize: 24, color: 'grey' }} />
        )
    }
    render() {
        return (
            <Container style={styles.container}>
                <Header style={styles.header} iosBarStyle={"light-content"}>
                    <Left style={{ flex: 1 }}>
                        <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} style={{ color: 'white' }} />
                    </Left>
                    <Body style={{ flex: 1 }} >
                        <Title>e-Waste</Title>
                    </Body>
                </Header>
                <View style={styles.input}>
                    <Item rounded style={{ backgroundColor: 'rgba(232, 232, 245, 0.94)' }} >
                        <Icon name="ios-search" style={{ fontSize: 24, color: 'grey' }} />
                        <Input placeholder="Search" />
                        <Icon name="ios-camera" style={{ fontSize: 29, color: 'grey' }} />
                    </Item>
                    <Button style={styles.btnSearch} onPress={() => this.props.navigation.navigate('Result')}><Text style={{color:'white'}}>Search</Text></Button>
                </View>
            </Container>
        );
    }
}
