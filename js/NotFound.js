import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View } from 'react-native';

export default class NotFound extends Component{
  static propTypes
  render() {
    <Text> NotFound </Text>
     <TouchableHighlight onPress={() => {
          this.props.navigator.pop();
        }}>
        <Text>Go To Home</Text>
        </TouchableHighlight>
  }
  }
}