import {StyleSheet, Dimensions } from 'react-native'
const { width: WIDTH } = Dimensions.get('window')
styles = StyleSheet.create({})
export default {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        header: {
            width: '100%',
            height: '60%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        input: {
            width: WIDTH - 55,
            height: 45,
            borderRadius: 45,
            fontSize: 16,
            paddingLeft: 45,
            paddingRight: 45,
            backgroundColor: 'rgba(232, 232, 245, 0.94)',
            color: 'black',
            marginHorizontal: 25
        },
        inputContainer: {
            paddingBottom: 10,
    
        },
        inputIcon: {
            position: 'absolute',
            top: 8,
            left: 39,
    
        },
        btnEye: {
            position: 'absolute',
            bottom: 22,
            right: 37
        },
        btnSearch: {
            position: 'relative',
            top: 15,
            fontSize: 18,
            borderRadius: 45,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 45,
            paddingRight: 45,
            backgroundColor: 'rgba(115, 51, 21, 0.7)',
            color: 'white'
    
    
    
        }
 
}