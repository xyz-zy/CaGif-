import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View, TouchableHighlight, AsyncStorage, Image, ScrollView, ListView } from 'react-native';
/*
class HungerVal extends Component{
	constructor(props){
		super(props);
		this.props;
		this.state = {health: AsyncStorage.getItem('PetData:hunger')};
	}

	render() {
//		this.state = {health: AsyncStorage.getItem('PetData:hunger')};
	  	let imgFile = require('../graphics/hunger0.png');
	  	var health = parseInt(this.state.health);
	    if (health > 75) {
	      imgFile = require('../graphics/hunger3.png');
	    }
	    else if (health > 50) {
	      imgFile = require('../graphics/hunger2.png');
	    }
	    else if (health > 25) {
	      imgFile = require('../graphics/hunger1.png');
	    }
	    else {
	      imgFile = require('../graphics/hunger0.png');
	    }
	    return (
	       <Image source = {imgFile} style = {{width: 50, height: 50}}/>
	    	);

  	}
}
*/
export default class Home extends Component{

  constructor(props) {
    super(props); 
//    this.state = {health: require('../graphics/hunger0.png'), fullness: require('../graphics/hunger0.png'), happiness: require('../graphics/hunger0.png')};
 //   setInterval(() => {this.update();}, 3000);
 //		AsyncStorage.setItem('PetData:hunger', '0');
// 		this.state = {health: AsyncStorage.getItem('PetData:hunger')};
    }

  update() {
    //based on the stats, we'll update the pictures
    var h = AsyncStorage.getItem('PetData:hunger');
    if (h != null) {
    	this.setState({health: h});
    }
    // if (health > 75) {
    //   this.setState({health: require('../graphics/hunger3.png')});
    // }
    // else if (health > 50) {
    //   this.setState({health: require('../graphics/hunger2.png')});
    // }
    // else if (health > 25) {
    //   this.setState({health: require('../graphics/hunger1.png')});
    // }
    // else {
    //   this.setState({health: require('../graphics/hunger0.png')});
    // }
    // this.state.health = parseInt(AsyncStorage.getItem('PetData:hunger'));
    // this.state.fullness = parseInt(AsyncStorage.getElementsByTagName(''))
    //<Image source = {this.state.fullness} style = {{width: 50, height: 50}}/>
  }

  render() {
//  	this.update();
    return (
      <Image 
          source = {require('../graphics/background.png')}
          style = {{flex: 1, width: null, height: null}}>
          <Text>{this.props.h}</Text>
          {this.renderButtons()}
          <View style={{flex:1, alignItems:'flex-end', flexDirection:'row', justifyContent:'space-between'}}>
           <this.props.h/>
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



/*
  renderHealth() {
  	let imgFile = require('../graphics/hunger0.png');
  	var health = parseInt(HungerVal blah state.health);
    if (health > 75) {
      imgFile = require('../graphics/hunger3.png');
    }
    else if (health > 50) {
      imgFile = require('../graphics/hunger2.png');
    }
    else if (health > 25) {
      imgFile = require('../graphics/hunger1.png');
    }
    else {
      imgFile = require('../graphics/hunger0.png');
    }
    return (
       <Image source = {imgFile} style = {{width: 50, height: 50}}/>
    	);

  }
  */
}