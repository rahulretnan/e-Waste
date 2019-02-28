import React from 'react';
import Drawer from '../drawer/Drawer'
import { createDrawerNavigator, DrawerItem, createAppContainer } from 'react-navigation';
import Login from '../login/Login';
import Profile from '../profile/Profile';
export default class AppMain extends React.Component {
  render() {
    return (
      <Profile />
    );
  }
}
