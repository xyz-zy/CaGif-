import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View, TouchableHighlight } from 'react-native';

export default class Inventory extends Component{
  render() {
    return (
      <View>
        <Text> Inventory </Text>
          <TouchableHighlight onPress= {() => {
              this.props.navigator.pop();
            }}>
            <Text>
              Go To Home
            </Text>
          </TouchableHighlight>
      </View>
    );
  }
}