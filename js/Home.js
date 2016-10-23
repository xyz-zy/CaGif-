import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View, TouchableHighlight, AsyncStorage, Image, ScrollView, ListView } from 'react-native';

  class Sprite extends Component {
    constructor(props) {
      super(props);

      // Toggle the state every second

    }
  }

export default class Home extends Component{

  constructor() {
    super();
    //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //this.state = {health: require('../graphics/hunger0.png'), fullness: require('../graphics/hunger0.png'), happiness: require('../graphics/hunger0.png')};
    setInterval(() => {this.update();}, 3000);
    }

  update() {
    //based on the stats, we'll update the pictures
    var health = parseInt(AsyncStorage.getItem('PetData:hunger'));
    if (health > 75) {
      this.setState(health: require('../graphics/hunger3.png'));
    }
    else if (health > 50) {
      this.setState(health: require('../graphics/hunger2.png'));
    }
    else if (health > 25) {
      this.setState(health: require('../graphics/hunger1.png'));
    }
    else {
      this.setState(health: require('../graphics/hunger3.png'));
    }
    // this.state.health = parseInt(AsyncStorage.getItem('PetData:hunger'));
    // this.state.fullness = parseInt(AsyncStorage.getElementsByTagName(''))
  }

  render() {
    return (
      <Image 
          source = {require('../graphics/background.png')}
          style = {{flex: 1, width: null, height: null}}>
          {this.renderButtons()}
          <View style={{flex:1, alignItems:'flex-end', flexDirection:'row', justifyContent:'space-between'}}>
            <Image source = {this.state.health} style = {{width: 500, height: 500}}/>
            <Image source = {this.state.fullness} style = {{width: 500, height: 500}}/>
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
}