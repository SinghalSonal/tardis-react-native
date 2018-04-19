// import { AppRegistry } from 'react-native';
// import App from './src/App';

// AppRegistry.registerComponent('Tardis', () => App);

import React from "react";
import { AppRegistry } from "react-native";
import App from "./src/App";
import { StackNavigator } from "react-navigation";
import KeyFob from "./src/components/KeyFob/index";
import Login from "./src/components/Login/index";
import Manual from "./src/components/Manual/index";

const Tardis = props => {
    return <App navigation={props.navigation} />;
};

Tardis.navigationOptions = {
    screen: App,    
    title: "Home"
};

const MyApp = StackNavigator({
    Home: {screen: Tardis},
    Login: { screen: Login, title: "Login" },
    KeyFob: { screen: KeyFob, title: "KeyFob" },
    Manual: { screen: Manual, title: "Manual" }
});

AppRegistry.registerComponent("Tardis", () => MyApp);

