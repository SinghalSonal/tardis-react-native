/**
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  View,
  Alert
} from 'react-native';

type Props = {};


export default class Login extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('./img/tardis.png')} />
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.textField}
            placeholder={'username'}
            onChangeText={(text) => {this.setState((previous) => ({...previous, username: text}))}}
          />
        </View>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.textField}
            placeholder={'password'}
            onChangeText={(text) => {this.setState((previous) => ({...previous, password: text}))}}
          />
        </View>
        <View style={styles.rowContainer}>
          <Button style={styles.submit} title="Submit" onPress={() => this.loginClick()}>
            <Text>Submit</Text>
          </Button>
          {/* <TouchableOpacity
            style={styles.submit}
            onPress={() => this.loginClick()}
            disabled={false} >
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }

  loginClick(){
    console.log("login clicked");
    //this.props.navigation.navigate('KeyFob');
    fetch('http://192.168.0.7:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: 'client_id', 
        username: this.state.username,
        password: this.state.password
      }),
    })
      .then((response) => {        
        console.log(response);
        Alert.alert('OK', 'Login sucess');
        this.props.navigation.navigate('KeyFob');
      })
      .catch((error) => {
        console.log(error);
        Alert.alert('OK', 'Login failed');
      });
  }

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    flex: 1,
    justifyContent: 'flex-start',
  },
  disabledSubmit: {
    alignItems: 'center',
    backgroundColor: '#b9ccee',
    borderRadius: 4,
    flex: 1,
    flexDirection: 'row',
    height: 44,
    justifyContent: 'center',
    marginLeft: 44,
    marginRight: 44,
    marginTop: 12,
  },
  image: {
    height: 240,
    marginBottom: 44,
    marginTop: 60,
    resizeMode: Image.resizeMode.contain,
    width: 240,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  submit: {
    alignItems: 'center',
    backgroundColor: '#5e81bc',
    borderRadius: 4,
    flex: 1,
    flexDirection: 'row',
    height: 44,
    justifyContent: 'center',
    marginLeft: 44,
    marginRight: 44,
    marginTop: 12,
  },
  text: {
    color: 'white'
  },
  textField: {
    borderColor: 'black',
    borderWidth: 0.5,
    flex: 1,
    marginLeft: 44,
    marginRight: 44,
    marginTop: 12,
    padding: 10,
  },
});
