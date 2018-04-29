/**
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  FlatList,
  View,
  Alert,
  ActivityIndicator,
  Text
} from 'react-native';

type Props = {};

// on load call manual endpoint and load images & text in list

export default class Manual extends Component<Props> {


constructor(props) {
  super(props);
  this.state = {
    isLoading: true
  }
}

componentDidMount() {
  return fetch('http://192.168.0.7:3000/manual')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        manualData: responseJson,
      }, function () {

      });

    })
    .catch((error) => {
      console.error(error);
    });
}

  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.manualData}
          renderItem={({ item }) => 
            <View style={styles.container}>
              <Image style={styles.image} source={this.getSource(item.image)} />
              <Text style={styles.parts}>{item.title}</Text>           
              <Text> {item.description}</Text>
            </View>
          }
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }


  getSource(imgName) {
    if (imgName == "defense") {
      return require('./img/defense.png');
    } else if (imgName == "drive"){
      return require('./img/drive.png');
    } else if (imgName == "guidance") {
      return require('./img/guidance.png');
    } else {
      return require('./img/navigation.png');
    }
  }
}


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#fafafa',
    borderWidth: 4,
    borderColor: '#27467f',
    borderRadius: 100,
    height: 100,
    justifyContent: 'center',
    padding: 8,
    width: 100,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#f5Fcff',
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    tintColor: '#5e81bc',
    height: 30,
    width: 30
  },
  parts: {
    fontWeight: 'bold',
    color: 'red',
    flexDirection: 'row'
  }
});
