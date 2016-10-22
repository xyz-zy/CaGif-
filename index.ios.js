import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View } from 'react-native';
// import Button from 'react-native-button'
import Home from '.js/Home';
import ChasIn from '.js/Home';
import Inventory from '.js/Home';
import NotFound from '.js/Home';
import Store from '.js/Home';

class CaGifApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Home', index: 0 }}
        renderScene={(route, navigator) =>
          if(this.route.title == "Home"){
            return (<Home navigator = {navigator}>);
          }
          if(this.route.title == "Inventory"){
            return (<Inventory navigator = {navigator}>);
          }
          if(this.route.title == "CashIn"){
              return (<CashIn navigator = {navigator}>);
          }
          if(this.route.title == "Store"){
                return (<Store navigator = {navigator}>);
          }
          return (<NotFound>)
        }
        
      />
      
    )
  }
}

AppRegistry.registerComponent('CaGif', () => CaGifApp);