import React, { Component } from 'react'
import Components from '../result/Result';
import Devices from '../result/Result';

export default class tab extends Component {
  render() {
    return (
      <tab/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  
    Components: Components,
    
    Devices: Devices,
  },{tabBarOptions: {
    activeTintColor: 'white',
    labelStyle: {
      fontSize: 16,
    },
    style: {
      backgroundColor: '#5252EA',
      alignSelf:'center',
    }, defaultnavigationOptions:{
      
      header: null,
  }
  
  
  }});
  
  const Tab = createAppContainer(TabNavigator);