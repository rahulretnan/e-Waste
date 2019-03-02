import React from 'react';
import Drawer from '../navigation/Drawer'
import { createDrawerNavigator, DrawerItem, createAppContainer } from 'react-navigation';
import Login from '../login/Login';
import Profile from '../profile/Profile';
import Cart from '../cart/Cart';
import Result from '../result/Result';
import ItemView from '../itemview/ItemView';
import Wishlist from '../wishlist/WishList';
import MyProduct from '../myproduct/MyProduct';
import { View } from 'native-base';
import Register from '../register/Register';
import Home from '../home/Home';
import Delivery from '../delivery/Delivery'
import Payment from '../payment/Payment'
export default class AppMain extends React.Component {
  render() {
    return (
      
        
      <Drawer />
        
         
    );
  }
}
