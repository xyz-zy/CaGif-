import React, { Component} from 'react';
import { AppRegistry, Navigator, Text, View, TouchableHighlight, Image, ScrollView, StyleSheet, AsyncStorage} from 'react-native';

export default class Inventory extends Component{
  constructor(props) {
    super(props);
    this.state = {hungerV: 0, happinessV: 0, healthV: 0};
  }
  
  render() {
    console.log('inventory state' + this.state.hungerV);
    return (
        <Image 
          source = {require('../graphics/InventoryBackground.jpg')}
          style = {{flex: 1, width: null, height: null}}>
          {this.renderFood()}
          {this.renderBackButton()}
        </Image>
    );
  }

  renderBackButton() {
    return(
      <View style = {{flex:1, alignItems: 'flex-end'}} >
          <TouchableHighlight onPress= {() => {
            console.log('calling changeState ' + this.state.hungerV)
            this.props.changeStats(this.state.healthV, this.state.hungerV, this.state.happinessV);
              this.props.navigator.pop();
            }}>
            <Image source = {require('../graphics/back.png')} style = {{width: 83, height: 83}}/>
          </TouchableHighlight>
      </View>
    );
  }

  renderFood() {
    const styles = StyleSheet.create({ contentContainer: { justifyContent: 'center' } });
    return(
        <View marginTop = {125} marginBottom = {150} flex = {1} flexDirection = 'column' justifyContent = 'space-around'>
           <ScrollView horizontal = {true} justifyContent = 'center' maxHeight = {83}>
           <TouchableHighlight onPress={() => {
              this.incrementHunger(20)
           }}>
           <Image
            style={{width: 83, height: 83}}
            source={require('../graphics/canFish.png')}>
           </Image>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {
              this.incrementHunger(20);
           }}>
           <Image
           style={{width: 83, height: 83}}
           source={require('../graphics/foodBowl2.png')}>
           </Image>
        </TouchableHighlight>
      </ScrollView>
           <ScrollView horizontal = {true} justifyContent = 'center' maxHeight = {83}>
           <TouchableHighlight onPress={() => {
              this.incrementHappiness(20);
           }}>
           <Image
           style={{width: 83, height: 83}}
           source={require('../graphics/yarn.jpg')}>
           </Image>
           </TouchableHighlight>
           <TouchableHighlight onPress={() => {
              this.incrementHappiness(20);
           }}>
           <Image
           style={{width: 83, height: 83}}
           source={require('../graphics/mouse.jpg')}>
           </Image>
           </TouchableHighlight>
        </ScrollView>
</View>
    );
  }
    
    
    incrementHunger(hungerPoints){
      this.state.hungerV = this.state.hungerV + hungerPoints;
      console.log('child' + this.state.hungerV);
      
    }
    
    incrementHappiness(happinessPoints){
      this.state.happinessV = this.state.happinessV + happinessPoints;
      console.log('child' + this.state.happinessV);
    }

    incrementHealth(healthPoints){
      this.state.healthV = this.state.healthV + healthPoints;
      console.log('child' + this.state.healthV);
    }
}
