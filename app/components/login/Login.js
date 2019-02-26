import React, { Component } from 'react'
import {
    Text,
    View,
    ImageBackground,
    Image,
    Button
} from 'react-native'
import { Container, Item, Input, Icon, Form, } from 'native-base';
import styles from './Styles'
export default class Login extends Component {
    render() {
        return (
            <Container>
                <ImageBackground
                    source={require('../../img/bg.jpg')}
                    style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={require('../../img/logo.png')} style={styles.logo} />
                        <Text style={styles.text}>Get Your Components Here!</Text>
                    </View>
                    <Form>
                        <Item rounded style={styles.input}>
                            <Icon name={'ios-person'}
                                style={styles.inputIcon} />
                            <Input placeholder='Username'
                                style={{ color: "white" }}
                                placeholderTextColor={'rgba(225, 225, 255, 0.7)'}
                            />
                        </Item>
                        <Item rounded style={styles.input}>
                            <Icon name={'ios-lock'}
                                style={styles.inputIcon} />
                            <Input placeholder='Password'
                                style={{ color: "white" }}
                                secureTextEntry={true}
                                placeholderTextColor={'rgba(225, 225, 255, 0.7)'} />
                            <Icon name={'ios-eye'} style={styles.inputIcon} />
                        </Item>

                    </Form>
                    <View style={styles.btnlContainer}>
                        <View style={styles.loginContainer}>
                            <Button
                                title="Sign in"
                                color="rgba(20, 58, 198, 0.52)" />
                        </View>
                    </View>
                    <View style={styles.btnrContainer}>
                        <View style={styles.loginContainer}>
                            <Button
                                title="Reister"
                                color="rgba(20, 58, 198, 0.52)" />
                        </View>
                    </View>
                </ImageBackground>
            </Container>
        );
    }
}

