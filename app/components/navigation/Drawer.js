import React, { Component } from "react";
import { View, Image, SafeAreaView, ScrollView } from "react-native";
import Register from "../register/Register";
import Login from "../login/Login";
import Home from "../home/Home";
import Result from "../result/Result";
import Cart from "../cart/Cart";
import Profile from "../profile/Profile";
import WishList from "../wishlist/WishList";
import MyProduct from "../myproduct/MyProduct";
import MyOrder from "../myorder/MyOrder";
import Logout from "../logout/Logout";
import ItemView from "../itemview/ItemView";
import Payment from "../payment/Payment";
import {
  createDrawerNavigator,
  DrawerItems,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
export default class Drawer extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render() {
    return <Myscreen />;
  }
}
const CustomMenu = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        height: 150,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Image
        source={require("../../img/logo.png")}
        style={{ height: 120, width: 120, borderRadius: 60 }}
      />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);
const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home
    },
    Cart: {
      screen: Cart
    },
    Wishlist: {
      screen: WishList
    },
    MyProduct: {
      screen: MyProduct
    },
    MyOrder: {
      screen: MyOrder
    },
    Profile: {
      screen: Profile
    },
    Logout: {
      screen: Logout
    }
  },
  {
    contentComponent: CustomMenu,
    contentOptions: {
      labelStyle: {
        color: "grey"
      }
    }
  }
);

const AppNavigator = createSwitchNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  HomeNav: {
    screen: MyDrawerNavigator
  },
  Cart: {
    screen: Cart
  },
  ItemView: {
    screen: ItemView
  },
  MyOrder: {
    screen: MyOrder
  },
  MyProduct: {
    screen: MyProduct
  },
  Profile: {
    screen: Profile
  },
  Payment: {
    screen: Payment
  },
  WishList: {
    screen: WishList
  },
  Drawer: {
    screen: Drawer
  },
  Result: {
    screen: Result
  }
});

const Myscreen = createAppContainer(AppNavigator);
