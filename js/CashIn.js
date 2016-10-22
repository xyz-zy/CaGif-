import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View } from 'react-native';

export default class CashIn extends Component{
  static propTypes
  render() {
    <Text> CashIn </Text>
     <TouchableHighlight onPress={() => {
          this.props.navigator.pop();
        }}>
        <Text>Go To Home</Text>
        </TouchableHighlight>
  }
  }
}