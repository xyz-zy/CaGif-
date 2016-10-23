import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View, TouchableHighlight, Image, ScrollView } from 'react-native';

export default class Home extends Component{

  render() {
    return (
        <Image 
          source = {require('../graphics/background.png')}
          style = {{flex: 1, width: null, height: null}}>
          {this.renderButtons()}
      </Image>
    );
  }

  renderButtons(){
    return(
      <View>
            <Text> Home </Text>
            <TouchableHighlight onPress={() => {
                  this.props.navigator.push({title: "Store"})
                }}>
                <Image 
                  style={{width: 20, height: 20}}
                  source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/2000px-Smiley.svg.png'}}>
                </Image>
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
        </View>
    );
  }
}