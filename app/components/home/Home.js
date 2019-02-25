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
import { Header } from 'react-native-elements';
import styles from './Styles'
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
