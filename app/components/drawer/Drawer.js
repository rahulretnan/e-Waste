import React, { Component } from 'react'
import {
    View,
    Image,
    SafeAreaView,
    ScrollView
}
from 'react-native';
import Register from '../register/Register';
import Login from '../login/Login';
import Home from '../home/Home';
import Result from '../result/Result';
import Settings from '../settings/Settings';
import Cart from '../cart/Cart';
import Profile from '../profile/Profile';
import WishList from '../wishlist/WishList';
import MyProduct from '../myproduct/MyProduct';
import MyOrder from '../myorder/MyOrder';
import Logout from '../logout/Logout';
import { createDrawerNavigator, DrawerItems, createAppContainer } from 'react-navigation';
export default class Drawer extends Component {
    render() {
        return (
            <MyApp />
        )
    }
}
const CustomMenu = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../img/logo.png')} style={{ height: 120, width: 120, borderRadius: 60 }} />
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
)
const MyDrawerNavigator = createDrawerNavigator({

    Home: {
        screen: Home
    },
    Profile: {
        screen: Profile
    },
    Cart:{
        screen:Cart
    },
    Wishlist: {
        screen: WishList
    },
    MyProduct:{
        screen:MyProduct
    },
    MyOrder: {
        screen: MyOrder
    },
    Settings: {
        screen: Settings
    },
    Logout: {
        screen: Logout
    },
}, {
        contentComponent: CustomMenu,
        contentOptions: {
            labelStyle: {
              color: 'grey',
            }
          }
    })
const MyApp = createAppContainer(MyDrawerNavigator);