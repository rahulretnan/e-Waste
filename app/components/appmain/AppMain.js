import React from "react";
import Drawer from "../navigation/Drawer";
import {
  createDrawerNavigator,
  DrawerItem,
  createAppContainer
} from "react-navigation";
import Login from "../login/Login";
import Profile from "../profile/Profile";
import Cart from "../cart/Cart";
import Result from "../result/Result";
import ItemView from "../itemview/ItemView";
import Wishlist from "../wishlist/WishList";
import MyProduct from "../myproduct/MyProduct";
import { View } from "native-base";
import Register from "../register/Register";
import Home from "../home/Home";
import Delivery from "../delivery/Delivery";
import Payment from "../payment/Payment";
import ApolloClient from "apollo-boost";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ApolloProvider } from "react-apollo";
import { store, persistor } from "./../../redux/store";

const client = new ApolloClient({
  uri: "http://192.168.0.7:8000/graphql",
  request: Operation => {
    const temp =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Im5pbWlzaGEiLCJleHAiOjE1NTE1OTE5NTQsIm9yaWdJYXQiOjE1NTE1OTE2NTR9.u-a4Z5XMvabPLU_CUSEE2c7EvOwE0nZOSe11CSjJTSw";
    const token = store.getState().auth.token
      ? store.getState().auth.token
      : temp;

    Operation.setContext({
      headers: {
        Authorization: token ? `JWT ${token}` : ""
      }
    });
    return Operation;
  }
});

export default class AppMain extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {/* <Drawer /> */}
            <Profile />
          </PersistGate>
        </Provider>
      </ApolloProvider>
    );
  }
}
