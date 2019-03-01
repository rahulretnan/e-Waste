import React from 'react';
import Drawer from '../drawer/Drawer'
import { createDrawerNavigator, DrawerItem, createAppContainer } from 'react-navigation';
import Login from '../login/Login';
import Profile from '../profile/Profile';
import Cart from '../cart/Cart';
import Result from '../result/Result';
import ItemView from '../itemview/ItemView';
export default class AppMain extends React.Component {
  render() {
    return (
      <Cart />
    );
  }
}
