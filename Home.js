import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import Button from 'react-native-button'

// class MyButton extends Button {
//   propTypes = {
//     next = PropTypes.Scene.isRequired
//   }
//   constructor(props) {
//     super(props);
//   }
// }

export default class Home extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
  }

  render() {
    let pic = {uri: 'http://images.clipartpanda.com/backpack-clipart-backpack_02_T.png'};
    return (
      <View>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Image
            source={pic}
          />
        </TouchableHighlight>
      </View>
    )
  }
        //   <TouchableHighlight onPress={this.props.onForward}>
        //   <Text>Tap me to go forward</Text>
        // </TouchableHighlight>
}