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
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
const { width: WIDTH } = Dimensions.get('window')
export default class Login extends React.Component {
    render() {
        return (
            <ImageBackground
                source={require('../img/bg.jpg')}
                style={styles.container}>
                <View style={styles.logoContainer} >
                    <Image
                        source={require('../img/logo.png')} style={styles.logo} />
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 18,
        paddingBottom: 25
    },
    logoContainer: {
        flex: 1,
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 120,
        height: 120
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        paddingRight: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'white',
        marginHorizontal: 25
    },
    inputContainer: {
        paddingBottom: 10,

    },
    inputIcon: {
        position: 'absolute',
        top: 8,
        left: 39,
        color: 'rgba(225, 225, 255, 0.8)'
    },
    btnEye: {
        position: 'absolute',
        bottom: 22,
        right: 37
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    loginContainer: {
        top: 30,
        flex: 1,
    },
    btnLogin: {
        position: 'relative',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 45,
        paddingRight: 45,
        justifyContent: 'space-between'


    },

});