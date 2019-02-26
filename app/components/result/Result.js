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
import { SearchBar } from 'react-native-elements';
import styles from './Styles'
const { width: WIDTH } = Dimensions.get('window')
export default class Result extends Component {
    state = {
        search: '',
      };
    
      updateSearch = search => {
        this.setState({ search });
      };
    
      render() {
    }
            <View>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    containerStyle={{
                        backgroundColor: '#48484F',
                        justifyContent: 'space-around',
                    }}
                    centerComponent={{ text: 'e-Waste', style: { color: '#fff', fontSize: 20 } }}
                />
          <SearchBar
            placeholder="Search"
            onChangeText={this.updateSearch}
            value={search}
          />
          </View>
        );
      }
    }

    