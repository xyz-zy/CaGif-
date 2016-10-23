import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View, TouchableHighlight, AsyncStorage } from 'react-native';
// import Button from 'react-native-button'
import Home from './js/Home';
import CashIn from './js/CashIn';
import Inventory from './js/Inventory';
import NotFound from './js/NotFound';
import Store from './js/Store';


class HungerVal extends Component{
  constructor(){
    super();
    this.state = {health: AsyncStorage.getItem('PetData:hunger')};
  }

  render() {
    this.state = {health: AsyncStorage.getItem('PetData:hunger')};
      let imgFile = require('./graphics/hunger0.png');
      var health = parseInt(this.state.health);
      if (health > 75) {
        imgFile = require('./graphics/hunger3.png');
      }
      else if (health > 50) {
        imgFile = require('./graphics/hunger2.png');
      }
      else if (health > 25) {
        imgFile = require('./graphics/hunger1.png');
      }
      else {
        imgFile = require('./graphics/hunger0.png');
      }
      return (
         <Image source = {imgFile} style = {{width: 50, height: 50}}/>
        );

    }
}

class CaGifApp extends Component {
  static hungerValue = new HungerVal();
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Home' }}
        renderScene={(route, navigator) => {
          if(route.title == "Home"){
            return <Home navigator = {navigator} HungerVal h = {this.hungerValue}/>;
          }
          if(route.title == "Inventory"){
            return <Inventory navigator = {navigator}/>;
          }
          if(route.title == "CashIn"){
              return <CashIn navigator = {navigator}/>;
          }
          if(route.title == "Store"){
                return <Store navigator = {navigator}/>;
          }
          return <NotFound/>;
          }
        }
          />);
  }
}


AppRegistry.registerComponent('CaGif', () => CaGifApp);
