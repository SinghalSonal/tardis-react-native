/**
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Loader from 'react-native-mask-loader';

type Props = {};

type State = {|
  appReady: boolean,
    rootKey: number,
|};

export default class App extends Component<Props> {

  state = {
    appReady: false,
    rootKey: Math.random(),
  };

  constructor() {
    super();
    this._image = require('./assets/twitter.png');
  }

  componentDidMount() {
    this.resetAnimation();
  }

  resetAnimation() {
    this.setState({
      appReady: false,
      rootKey: Math.random()
    });

    setTimeout(() => {
      this.setState({
        appReady: true,
      });
    }, 3000);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View key={this.state.rootKey} style={styles.root}>
        <Loader
          isLoaded={this.state.appReady}
          imageSource={this._image}
          backgroundStyle={styles.loadingBackgroundStyle}
        >
          <View style={styles.container}>
            <Text style={styles.instructions}>
              Welcome to the TARDIS coding exercise! Please read the README.md for more instructions on what to implement.
            </Text>
            <Button style={styles.button} title="Login" onPress={() => navigate('Login')}>
            </Button>
            <Button style={styles.button} title="Manual" onPress={() => navigate('Manual')}>
            </Button>
            <Button onPress={() => {this.resetAnimation();}} title="Animation">
            </Button>
          </View>
        </Loader>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  loadingBackgroundStyle: {
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    // textAlign: 'center',
    color: '#ffffff',
    marginBottom: 7,
    marginTop: 7,
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 2
  }
});
