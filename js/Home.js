import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View } from 'react-native';

export default class Home extends Component{
  static propTypes
  render() {
    return (
    <Text> Home </Text>
    <TouchableHighlight onPress={() => {
          this.props.navigator.push({title: "Store"})
        }}>
        <Text>Go To Store</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={() => {
          this.props.navigator.push({title: "Inventory"})
        }}>
        <Text>Go To Inventory</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={() => {
          this.props.navigator.push({title: "CashIn"})
        }}>
        <Text>Go To CashIn</Text>
    </TouchableHighlight>
   );
  }
}