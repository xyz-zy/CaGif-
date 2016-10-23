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
    this.state = {healthStat: 0, hungerStat: 0, happinessStat: 0, pawPoints : 100};
      this.addStats = this.addStats.bind(this);
      this.getHealth = this.getHealth.bind(this);
      this.getHunger = this.getHunger.bind(this);
      this.getHappiness = this.getHappiness.bind(this);
      this.addPawPoints = this.addPawPoints.bind(this);
      this.getPawPoints = this.getPawPoints.bind(this);
  }

  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Home' }}
        renderScene={(route, navigator) => {
          if(route.title == "Sprite"){
            return <Sprite navigator = {navigator} getHungerStat = {this.getHunger}/>;
          }
          if(route.title == "Home"){
            return <Home navigator = {navigator}
                         getHealthStat = {this.getHealth}
                         getHungerStat = {this.getHunger}
                         getHappinessStat = {this.getHappiness}/>;
          }
          if(route.title == "Inventory"){
            return <Inventory navigator = {navigator} changeStats = {this.addStats}/>;
          }
          if(route.title == "CashIn"){
              return <CashIn navigator = {navigator}/>;
          }
          if(route.title == "Store"){
                return <Store navigator = {navigator} addPP = {this.addPawPoints} getPP = {this.getPawPoints} />;
          }
          return <NotFound/>;
          }
        }
          />);
  }

  addStats(healthPoints, hungerPoints, happinessPoints) {
    this.state.healthStat = this.state.healthStat + healthPoints;
    this.state.hungerStat = this.state.hungerStat + hungerPoints;
    this.state.happinessStat = this.state.happinessStat + happinessPoints;    
  }

    getHealth() {
        return this.state.healthStat;
    }

    getHunger() {
        return this.state.hungerStat;
    }

    getHappiness() {
        return this.state.happinessStat;
    }

    addPawPoints(amount) {
        this.state.pawPoints = this.state.pawPoints + amount;
    }

    getPawPoints() {
        return this.state.pawPoints;
    }

}


AppRegistry.registerComponent('CaGif', () => CaGifApp);
