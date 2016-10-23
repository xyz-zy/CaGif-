import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View, TouchableHighlight, AsyncStorage, Image, ScrollView, ListView } from 'react-native';
import {CaGifApp} from '../index.ios.js';

export default class Home extends Component{

  constructor(props) {
    super(props); 
      this.state = {hungerV: this.props.hungerValue};
    }

  render(){
    return (
      <Image 
          source = {require('../graphics/background.png')}
          style = {{flex: 1, width: null, height: null}}>
          {this.renderButtons()}
          {this.renderMenu()}
          <View style={{flex:1, alignItems:'flex-end', flexDirection:'row', justifyContent:'space-between'}}>
           {this.renderHealth()}
          </View>
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

  
  renderMenu(){
    return(
      <Image 
        source = {require('../graphics/menuBar.png')}
        position = 'absolute'
        bottom = {0}
        left = {5}
        alignItems = 'center'
        >
      </Image>
    );
  }


  renderMenuButtons() {
    return(
      <View>
      <TouchableHighlight onPress={() => {
        this.props.navigator.push({title: "CashIn"})
        }}>
        <Text>Go To CashIn</Text>
      </TouchableHighlight>
        
      <TouchableHighlight onPress={() => {
        this.props.navigator.push({title: "CashIn"})
        }}>
      <Text>Go To CashIn</Text>
      </TouchableHighlight>
      </View>
    );
  }
  
  renderHealth() {
  	let imgFile = require('../graphics/hunger0.png');
    health = this.props.getHungerStat();
    if (health > 75) {
      imgFile = require('../graphics/hunger3.png');
    }
    else if (health > 50) {
      imgFile = require('../graphics/hunger2.png');
    }
    else if (health > 25) {
      imgFile = require('../graphics/hunger1.png');
    }
    else {
      imgFile = require('../graphics/hunger0.png');
    }
    return (
       <Image source = {imgFile} style = {{width: 50, height: 50}}/>
    	);

  }

}