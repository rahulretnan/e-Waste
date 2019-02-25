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
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
const { width: WIDTH } = Dimensions.get('window')
export default class Login extends React.Component {
    render() {
        return (
            <ImageBackground
                source={require('../../img/bg.jpg')}
                style={styles.container}>
                <View style={styles.logoContainer} >
                    <Image
                        source={require('../../img/logo.png')} style={styles.logo} />
                    <Text style={styles.text}>Get Your Components Here!</Text>

                    {/* Username */}

                </View>
          
                <View style={styles.inputContainer}>
                    <Icon name={'ios-person'} size={27}
                        style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Username'}
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

                    {/* Show Password */}

                    <TouchableOpacity style={styles.btnEye}>
                        <Icon name={'ios-eye'} color={'rgba(225, 225, 255, 0.7)'} size={20}></Icon>
                    </TouchableOpacity>
                </View>

                {/* Login btn */}

                <View style={styles.btnContainer}>
                    <View style={styles.loginContainer}>
                        <TouchableOpacity style={styles.btnLogin}>
                            <Button
                                title="Login"
                                color="rgba(20, 58, 198, 0.52)" />
                        </TouchableOpacity>

                        {/* Register btn */}

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

