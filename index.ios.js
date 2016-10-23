import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View, TouchableHighlight } from 'react-native';
// import Button from 'react-native-button'
import Home from './js/Home';
import CashIn from './js/CashIn';
import Inventory from './js/Inventory';
import NotFound from './js/NotFound';
import Store from './js/Store';

class CaGifApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Home' }}
        renderScene={(route, navigator) => {
          if(route.title == "Home"){
            return <Home navigator = {navigator}/>;
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
