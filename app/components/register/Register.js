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
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
import styles from './Styles'
const { width: WIDTH } = Dimensions.get('window')
export default class Register extends React.Component {
    render() {
        return (
            <ImageBackground
                source={require('../../img/bg.jpg')}
                style={styles.container}>
                <View style={styles.logoContainer} >
                    <Image
                        source={require('../../img/logo.png')} style={styles.logo} />
                    <Text style={styles.text}>Get Your Components Here!</Text>
                </View>


                {/* Name */}

                <View style={styles.inputContainer}>
                    <Icon name={'ios-person'} size={27}
                        style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Name'}
                        placeholderTextColor={'rgba(225, 225, 255, 0.7)'}
                        underlineColorAndroid={'transparent'} />
                </View>

                {/* Email */}

                <View style={styles.inputContainer}>
                    <Icon name={'ios-mail'} size={27}
                        style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Email'}
                        placeholderTextColor={'rgba(225, 225, 255, 0.7)'}
                        underlineColorAndroid={'transparent'} />
                </View>

                {/* Mobile */}

                <View style={styles.inputContainer}>
                    <Icon name={'ios-call'} size={27}
                        style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Mobile no.'}
                        placeholderTextColor={'rgba(225, 225, 255, 0.7)'}
                        underlineColorAndroid={'transparent'} />
                </View>

                {/* Password */}

                <View style={styles.inputContainer}>
                    <Icon name={'ios-lock'} size={27}
                        style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        placeholderTextColor={'rgba(225, 225, 255, 0.7)'}
                        underlineColorAndroid={'transparent'} />

                    {/* show password */}

                    <TouchableOpacity style={styles.btnEye}>
                        <Icon name={'ios-eye'} color={'rgba(225, 225, 255, 0.7)'} size={20}></Icon>
                    </TouchableOpacity>
                </View>

                {/* Confirm Password */}

                <View style={styles.inputContainer}>
                    <Icon name={'ios-lock'} size={27}
                        style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Confirm Password'}
                        secureTextEntry={true}
                        placeholderTextColor={'rgba(225, 225, 255, 0.7)'}
                        underlineColorAndroid={'transparent'} />

                    {/* show password */}

                    <TouchableOpacity style={styles.btnEye}>
                        <Icon name={'ios-eye'} color={'rgba(225, 225, 255, 0.7)'} size={20}></Icon>
                    </TouchableOpacity>
                </View>

                {/* Register btn */}

                <View style={styles.btnContainer}>
                    <View style={styles.loginContainer}>
                        <TouchableOpacity style={styles.btnLogin}>
                            <Button
                                title="Reister"
                                color="rgba(20, 58, 198, 0.52)"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

