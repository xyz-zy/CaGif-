import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View, TouchableHighlight, AsyncStorage, Image, ScrollView, ListView } from 'react-native';
import {CaGifApp} from '../index.ios.js';

export default class Home extends Component{

  constructor(props) {
    super(props);
    this.state = {counter: 1};
    setInterval(() => {
      this.setState({counter: this.state.counter == 28 ? 1 : this.state.counter + 1});
    }, 60);
  }

  render(){
    return (
      <Image 
          source = {require('../graphics/background.png')}
          style = {{flex: 1, width: null, height: null}}>
          {this.renderTopButtons()}
          {this.renderMenu()}
          {this.renderSprite()}
          <View style={{flex:1, alignItems:'flex-end', flexDirection:'row', justifyContent:'space-between'}}>
           {this.renderHunger()}
          </View>
      </Image>
    );
  }

renderSprite() {
  let imgFile = require('../graphics/cat/idle1.png');
    health = this.props.getHungerStat();
    if (this.state.counter == 1 || this.state.counter == 11) {
      imgFile = require('../graphics/cat/idle1.png');
    }
    else if (this.state.counter == 2 || this.state.counter == 12) {
      imgFile = require('../graphics/cat/idle2.png');
    }
    else if (this.state.counter == 3 || this.state.counter == 13) {
      imgFile = require('../graphics/cat/idle3.png');
    }
    else if (this.state.counter == 4 || this.state.counter == 14){
      imgFile = require('../graphics/cat/idle4.png');
    } 
    else if (this.state.counter == 5 || this.state.counter == 15) {
      imgFile = require('../graphics/cat/idle5.png');
    }
    else if (this.state.counter == 6 || this.state.counter == 16) {
      imgFile = require('../graphics/cat/idle6.png');
    }
    else if (this.state.counter == 7 || this.state.counter == 17) {
      imgFile = require('../graphics/cat/idle7.png');
    }
    else if (this.state.counter == 8 || this.state.counter == 18) {
      imgFile = require('../graphics/cat/idle8.png');
    }
    else if (this.state.counter == 9 || this.state.counter == 19) {
      imgFile = require('../graphics/cat/idle9.png');
    }
    else if (this.state.counter == 10 || this.state.counter == 20) {
      imgFile = require('../graphics/cat/idle10.png');
    }
    else if (this.state.counter > 10) {
      health = this.props.getHungerStat();
      if (health > 75) {
        if (this.state.counter == 21) {
            imgFile = require('../graphics/cat/jump1.png');
        }
        if (this.state.counter == 22) {
            imgFile = require('../graphics/cat/jump2.png');
        }
        if (this.state.counter == 23) {
            imgFile = require('../graphics/cat/jump3.png');
        }
        if (this.state.counter == 24) {
            imgFile = require('../graphics/cat/jump4.png');
        }
        if (this.state.counter == 25) {
            imgFile = require('../graphics/cat/jump5.png');
        }
        if (this.state.counter == 26) {
            imgFile = require('../graphics/cat/jump6.png');
        }
        if (this.state.counter == 27) {
            imgFile = require('../graphics/cat/jump7.png');
        }
        if (this.state.counter == 28) {
            imgFile = require('../graphics/cat/jump8.png');
        }
      }
      else {//(health > 50) {
          if (this.state.counter == 21) {
            imgFile = require('../graphics/cat/hurt1.png');
        }
        if (this.state.counter == 22) {
            imgFile = require('../graphics/cat/hurt2.png');
        }
        if (this.state.counter == 23) {
            imgFile = require('../graphics/cat/hurt3.png');
        }
        if (this.state.counter == 24) {
            imgFile = require('../graphics/cat/hurt4.png');
        }
        if (this.state.counter == 25) {
            imgFile = require('../graphics/cat/hurt5.png');
        }
        if (this.state.counter == 26) {
            imgFile = require('../graphics/cat/hurt6.png');
        }
        if (this.state.counter == 27) {
            imgFile = require('../graphics/cat/hurt7.png');
        }
        if (this.state.counter == 28) {
            imgFile = require('../graphics/cat/hurt8.png');
        }
      }
      // else if (health > 25) {
      //   imgFile = require('../graphics/hunger1.png');
      // }
      // else {
      //   imgFile = require('../graphics/hunger0.png');
      // }
    }

    return (
       <Image source = {imgFile} style = {{width: 300, height: 300}}/>
      );
}
  renderTopButtons(){
    return(
      <View flexDirection = 'row' justifyContent = 'space-between' top={30} left = {15} right = {15}>
            <TouchableHighlight onPress={() => {
                  this.props.navigator.push({title: "Store"})
                }}>
                <Image 
                  style={{width: 83, height: 83}}
                  source={require('../graphics/iconBG2.png')}>
                  <Image
                      style={{width: 83, height: 83}}
                      source={require('../graphics/storeIcon.png')}>
                  </Image>
                </Image>
            </TouchableHighlight>
          <TouchableHighlight onPress={() => {
              this.props.navigator.push({title: "Inventory"})
          }}>
              <Image
                  style={{width: 83, height: 83}}
                  source={require('../graphics/backpack.png')}>
                <Image
                    style={{width: 83, height: 83}}
                    source={require('../graphics/storeIcon.png')}>
                </Image>
              </Image>
          </TouchableHighlight>
        </View>
    );
  }

  
  renderMenu(){
    return(
      <Image 
        source = {require('../graphics/menuBar.png')}
        position = 'absolute'
        bottom = {0}
        left = {5}
        alignItems = 'center'
        >
          {this.renderMenuButtons()}
      </Image>
    );
  }


  renderMenuButtons() {
    return(
      <View flexDirection = 'row' left = {20} right = {20} justifyContent = 'space-between'>
          {this.renderHealth()}
          {this.renderHunger()}
          {this.renderHappiness()}
        <TouchableHighlight onPress={() => {
          this.props.navigator.push({title: "CashIn"})
          }}>
          <Image
            source = {require('../graphics/coin.png')}
            >
          </Image>
        </TouchableHighlight>
      </View>
    );
  }
  
  renderHealth() {
  	let imgFile = require('../graphics/health0.png');
    health = this.props.getHungerStat();
    if (health > 80) {
      imgFile = require('../graphics/health4.png');
    }
    else if (health > 60) {
      imgFile = require('../graphics/health3.png');
    }
    else if (health > 40) {
      imgFile = require('../graphics/health2.png');
    }
    else if (health > 20){
      imgFile = require('../graphics/health1.png');
    } 
    else {
      imgFile = require('../graphics/health0.png');
    }
    return (
       <Image source = {imgFile} style = {{width: 83, height: 83}}/>
    	);

  }

  renderHunger() {
  	let imgFile = require('../graphics/hunger0.png');
    health = this.props.getHungerStat();
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
       <Image source = {imgFile} style = {{width: 83, height: 83}}/>
    	);

  }

  renderHappiness() {
  	let imgFile = require('../graphics/happiness1.png');
    health = this.props.getHungerStat();
    if (health > 67) {
      imgFile = require('../graphics/hunger3.png');
    }
    else if (health > 33) {
      imgFile = require('../graphics/hunger2.png');
    }
    else {
      imgFile = require('../graphics/hunger1.png');
    }
    return (
       <Image source = {imgFile} style = {{width: 83, height: 83}}/>
    );

  }


}