import {StyleSheet, Dimensions } from 'react-native'
const { width: WIDTH } = Dimensions.get('window')
styles = StyleSheet.create({})
export default {
    
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
            paddingTop: 50,
            justifyContent: 'center',
            alignItems: 'center'
    
        },
        logo: {
            width: 50,
            height: 50
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
    

}