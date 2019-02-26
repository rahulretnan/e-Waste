import React from "react";
import * as Expo from "expo";

// At the top of your file
import { Font } from "expo";
import { Ionicons } from "@expo/vector-icons";
import AppMain from './app/components/appmain/AppMain';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }
  // Later on in your component
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ loaded: true });
  }

  render() {
    if (!this.state.loaded) {
      return <Expo.AppLoading />;
    }
    return (<AppMain />);
  }
}