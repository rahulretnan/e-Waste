import React, { Component } from 'react'
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
import { Header } from 'react-native-elements'
const { width: WIDTH } = Dimensions.get('window')
export default class Home extends Component {
    render() {
        return (

            <View style={styles.header}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    containerStyle={{
                        backgroundColor: '#48484F',
                        justifyContent: 'space-around',
                    }}
                    centerComponent={{ text: 'e-Waste', style: { color: '#fff', fontSize: 20 } }}
                />
                <View style={styles.container}>

                </View>

                <View style={styles.inputContainer}>
                    <Icon name={'ios-search'} size={27}
                        style={styles.inputIcon}
                        color={'rgb(31, 30, 29)'} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Search'}
                        placeholderTextColor={'rgba(61, 55, 52, 0.7)'}
                        underlineColorAndroid={'transparent'} />
                    <TouchableOpacity style={styles.btnEye}>
                        <Icon name={'ios-camera'} color={'rgba(61, 55, 52, 0.7)'} size={20}></Icon>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text
                        style={styles.btnSearch}>Search</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
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

});