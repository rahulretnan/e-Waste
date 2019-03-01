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
import Cart from '../cart/Cart';
import Profile from '../profile/Profile';
import WishList from '../wishlist/WishList';
import MyProduct from '../myproduct/MyProduct';
import MyOrder from '../myorder/MyOrder';
import Logout from '../logout/Logout';
import Drawer from '../navigation/Drawer'
import ItemView from '../itemview/ItemView'
import { createStackNavigator, createAppContainer } from 'react-navigation';
export default class Screen extends Component {
    render() {
        return (
            <Myscreen />
        )
    }
}
const AppNavigator = createStackNavigator({
    Login: {
      screen: Login
    },
    Register:{
        screen: Register
    },
    Home:{
        screen:Home
    },
    Cart:{
        screen: Cart
    },
    ItemView:{
        screen:ItemView
    },
    MyOrder:{
        screen:MyOrder
    },
    MyProduct:{
        screen:MyProduct
    },
    Profile:{
        screen:Profile
    },
    Result:{
        screen:Result
    },
    WishList:{
        screen:WishList
    },
    Drawer:{
        screen:Drawer
    },
    Result:{
        screen: Result
    }
  });
  
const Myscreen = createAppContainer(AppNavigator);
