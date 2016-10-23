import React, { Component} from 'react';
import { AppRegistry, Navigator, Text, View, TouchableHighlight, Image, ScrollView, StyleSheet, AsyncStorage} from 'react-native';

export default class Inventory extends Component{
  render() {
    return (
        <Image 
          source = {require('../graphics/InventoryBackground.jpg')}
          style = {{flex: 1, width: null, height: null}}>
          {this.renderBackButton()}
          {this.renderFood()}
        </Image>
    );
  }

  renderBackButton() {
    return(
      <View>
        <Text> Inventory </Text>
          <TouchableHighlight onPress= {() => {
              this.props.navigator.pop();
            }}>
            <Text>
              Go To Home
            </Text>
          </TouchableHighlight>
      </View>
    );
  }

  renderFood() {
    const styles = StyleSheet.create({ contentContainer: { justifyContent: 'center' } });
    return(
/*    <View>
      <ScrollView horizontal = {true}/>
        <Image 
          source = {require('../graphics/InventoryBackground.jpg')}>
        </Image>
      </ScrollView>
    </View>
 <Image
 source = {require('../graphics/canFish.png')}
 style = {{height : 83, width :83}}>
 </Image>
 */
           <View marginTop = {125} marginBottom = {150} flex = {1} flexDirection = 'column' justifyContent = 'space-around'>
           <ScrollView horizontal = {true} justifyContent = 'center' maxHeight = {83}>
           <TouchableHighlight onPress={() => {
           AsyncStorage.setItem('PetData:hunger', this.incrementHunger(20))
           }}>
           <Image
            style={{width: 83, height: 83}}
            source={require('../graphics/canFish.png')}>
           </Image>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {
           AsyncStorage.setItem('PetData:hunger', this.incrementHunger(20))
           }}>
           <Image
           style={{width: 83, height: 83}}
           source={require('../graphics/foodBowl2.png')}>
           </Image>
        </TouchableHighlight>
      </ScrollView>
           <ScrollView horizontal = {true} justifyContent = 'center' maxHeight = {83}>
           <TouchableHighlight onPress={() => {
           AsyncStorage.setItem('PetData:happiness', this.incrementHappiness(20))
           }}>
           <Image
           style={{width: 83, height: 83}}
           source={require('../graphics/yarn.jpg')}>
           </Image>
           </TouchableHighlight>
           <TouchableHighlight onPress={() => {
           AsyncStorage.setItem('PetData:happiness', this.incrementHappiness(20))
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
        let current = parseInt(AsyncStorage.getItem('PetData:hunger'));
        current  = current + parseInt(hungerPoints);
        return current.toString();
    }
    
    incrementHappiness(happinessPoints){
        let current = parseInt(AsyncStorage.getItem('PetData:happiness'));
        current  = current + parseInt(happinessPoints);
        return current.toString();
    }
}
