import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View, TouchableHighlight, AsyncStorage, Image } from 'react-native';
// import Button from 'react-native-button'
import Home from './js/Home';
import CashIn from './js/CashIn';
import Inventory from './js/Inventory';
import NotFound from './js/NotFound';
import Store from './js/Store';
import Sprite from './js/Sprite';


class CaGifApp extends Component {

  constructor() {
    super();
    this.state = {healthStat: 0, hungerStat: 0, happinessStat: 0};
    this.addHunger = this.addHunger.bind(this);
    this.getHunger = this.getHunger.bind(this);
    this.addStats = this.addStats.bind(this);
  }

  render() {

    return (
      <Navigator
        initialRoute={{ title: 'Sprite' }}
        renderScene={(route, navigator) => {
          if(route.title == "Sprite"){
            return <Sprite navigator = {navigator} getHungerStat = {this.getHunger}/>;
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
