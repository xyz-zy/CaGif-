import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View, TouchableHighlight } from 'react-native';


class Sprite extends Component {
  constructor(props) {
    super(props);
    this.state = {health: 100, fullness: 100, happiness: 100};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ health: health - 1, fullness: fullness - 1, happiness: happiness - 1});
    }, 3000);
  }

  render() {
  	let display = this.state.health;
  	return (
  		<View>
		  	<Text> Store </Text>
		          <TouchableHighlight onPress= {() => {
		              this.props.navigator.pop();
		            }}>
		            <Text>
		              Go To Home
		            </Text>
		          </TouchableHighlight>
		      <Text>{display}</Text>
		</View>
    );
  }
}