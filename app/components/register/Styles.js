import { StyleSheet, Dimensions } from 'react-native'
const { width: WIDTH } = Dimensions.get('window')
styles = StyleSheet.create({})
export default {
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 18,
    },
    logoContainer: {
        top: 50,
        justifyContent: 'center',
        alignItems: 'center',

    },
    logo: {
        width: 64,
        height: 64
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        fontSize: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        top: 60

    },
    inputIcon: {

        color: 'rgba(225, 225, 255, 0.8)'
    },
    btnlContainer: {
        width: '70%',
        marginTop: 85,
    },
    loginContainer: {
        top: 20,
    }

}