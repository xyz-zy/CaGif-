import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View } from 'react-native';

export default class Inventory extends Component{
  static propTypes
  render() {
    <Text> Inventory </Text>
     <TouchableHighlight onPress={() => {
          this.props.navigator.pop();
        }}>
        <Text>Go To Home</Text>
        </TouchableHighlight>
  }
  }
}