import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View } from 'react-native';
// import Button from 'react-native-button'
import Home from './Home';

class CaGifApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Home', index: 0 }}
        renderScene={(route, navigator) =>
          <Home
            title={route.title}

            // Function to call when a new scene should be displayed           
            onForward={ () => {    
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            // onBack={() => {
            //   if (route.index > 0) {
            //     navigator.pop();
            //   }
            // }}
          />
        }
      />
    )
  }
}

AppRegistry.registerComponent('CaGif', () => CaGifApp);