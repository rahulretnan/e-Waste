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
import { Formik } from 'formik'
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { connect } from "react-redux";
import { setAuth } from "./../../redux/actions/auth-actions";


const SIGNUP = gql`
  mutation Signup($firstname: String!, $lastname: String!,  $username: String!, $email: String!, $phoneNumber: String!, $password: String!) {
    createCustomuser(firstname: $firstname, lastname: $lastname, username: $username, email: $email, phoneNumber: $phoneNumber, password: $password) {
      customuser {
        username
      }
    }
  }
`;


export default class Register extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: null
    })
    render() {
        return (
            <Mutation
            onCompleted={() => {
              this.setState({ form: "register" });
              this.props.navigation.navigate("Login");
            }}
            mutation={SIGNUP}
          >
            {(SignUp, { data }) => (
            <Container>
                <ImageBackground    
                    source={require('../../img/bg.jpg')}
                    style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={require('../../img/logo.png')} style={styles.logo} />
                        <Text style={styles.text}>Get Your Components Here!</Text>
                    </View>
                    <Formik
                        initialValues={{ firstname: '', lastname: '',username: '', email: '', phoneNumber: '', password: ''}}
                        onSubmit={values => SignUp({ variables: values })}
                        render={({
                            values,
                            handleSubmit,
                            handleChange,
                            handleBlur,
                            errors,
                            touched,
                            setFieldTouched,
                            isValid,
                            isSubmitting,
                        }) => (
                                <React.Fragment>
                                    <Item rounded style={styles.input}>
                                        <Icon name={'ios-person'}
                                            style={styles.inputIcon} />
                                        <Input placeholder='First Name'
                                            onChangeText={handleChange('firstname')}
                                            onBlur={handleBlur('firstname')}
                                            value={values.firstname}
                                            style={{ color: "white" }}
                                            placeholderTextColor={'rgba(225, 225, 255, 0.7)'}
                                        />
                                    </Item>
                                    <Item rounded style={styles.input}>
                                        <Icon name={'ios-person'}
                                            style={styles.inputIcon} />
                                        <Input placeholder='Last Name'
                                            onChangeText={handleChange('lastname')}
                                            onBlur={handleBlur('lastname')}
                                            value={values.lastname}
                                            style={{ color: "white" }}
                                            placeholderTextColor={'rgba(225, 225, 255, 0.7)'}
                                        />
                                    </Item>
                                    <Item rounded style={styles.input}>
                                        <Icon name={'ios-person'}
                                            style={styles.inputIcon} />
                                        <Input placeholder='Username'
                                            onChangeText={handleChange('username')}
                                            onBlur={handleBlur('username')}
                                            value={values.username}
                                            style={{ color: "white" }}
                                            placeholderTextColor={'rgba(225, 225, 255, 0.7)'}
                                        />
                                    </Item>
                                    <Item rounded style={styles.input}>
                                        <Icon name={'ios-mail'}
                                            style={styles.inputIcon} />
                                        <Input placeholder='Email'
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            value={values.email}
                                            style={{ color: "white" }}
                                            placeholderTextColor={'rgba(225, 225, 255, 0.7)'}
                                        />
                                    </Item>
                                    <Item rounded style={styles.input}>
                                        <Icon name={'ios-call'}
                                            style={styles.inputIcon} />
                                        <Input placeholder='Mobile No.'
                                            onChangeText={handleChange('phoneNumber')}
                                            onBlur={handleBlur('phoneNumber')}
                                            value={values.phoneNumber}
                                            style={{ color: "white" }}
                                            placeholderTextColor={'rgba(225, 225, 255, 0.7)'}
                                        />
                                    </Item>
                                    <Item rounded style={styles.input}>
                                        <Icon name={'ios-lock'}
                                            style={styles.inputIcon} />
                                        <Input placeholder='Password'
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            value={values.password}
                                            style={{ color: "white" }}
                                            secureTextEntry={true}
                                            placeholderTextColor={'rgba(225, 225, 255, 0.7)'} />
                                        <Icon name={'ios-eye'} style={styles.inputIcon} />
                                    </Item>

                                    <View style={styles.btnlContainer}>
                                        <View style={styles.loginContainer}>
                                            <Button
                                                onPress={handleSubmit}
                                                title="Register"
                                                color="rgba(20, 58, 198, 0.52)" />
                                        </View>
                                    </View>
                                </React.Fragment>
                            )}
                    />
                </ImageBackground>
            </Container>
            )}
            </Mutation>
        );
    }
}
