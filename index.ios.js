import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View, TouchableHighlight, AsyncStorage, Image } from 'react-native';
// import Button from 'react-native-button'
import Home from './js/Home';
import CashIn from './js/CashIn';
import Inventory from './js/Inventory';
import NotFound from './js/NotFound';
import Store from './js/Store';


class HungerVal extends Component{
  
  constructor(){
    super();
    console.log('HungerVal constructor');
    this.state = {health: AsyncStorage.getItem('PetData:hunger')};
  }

  render() {
    console.log('calling HungerVal.render()');
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

  constructor() {
    super();
    this.state = {healthStat: 0, hungerStat: 0, happinessStat: 0};
    this.addHunger = this.addHunger.bind(this);
    this.getHunger = this.getHunger.bind(this);
    this.addStats = this.addStats.bind(this);
  }

  render() {
    console.log('hello');
    console.log(this.state.hv);
    this.hungerValue = React.createElement(HungerVal);
    return (
      <Navigator
        initialRoute={{ title: 'Home' }}
        renderScene={(route, navigator) => {
          if(route.title == "Home"){
            return <Home navigator = {navigator} hungerValue = {this.state.hungerStat} getHungerStat = {this.getHunger}/>;
          }
          if(route.title == "Inventory"){
            return <Inventory navigator = {navigator} changeStats = {this.addStats}/>;
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
  
  addHunger(hungerPoints){
    this.state.hungerStat = this.state.hungerStat + hungerPoints;
  }

  getHunger() {
    return this.state.hungerStat;
  }

  addStats(healthPoints, hungerPoints, happinessPoints) {
    this.state.healthStat = this.state.healthStat + healthPoints;
    this.state.hungerStat = this.state.hungerStat + hungerPoints;
    this.state.happinessStat = this.state.happinessStat + happinessPoints;    
  }


}


AppRegistry.registerComponent('CaGif', () => CaGifApp);
