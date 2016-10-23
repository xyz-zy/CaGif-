import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View, TouchableHighlight, Image, ScrollView, StyleSheet} from 'react-native';

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
*/
    <ScrollView horizontal = {true}>
    <View style = {{justifyContent: 'center'}}>
        <Image 
          source = {require('../graphics/canFish.png')}
          style = {{height : 83, width :83}}>
        </Image>
        <Image 
          source = {require('../graphics/foodBowl2.png')}
          style = {{height : 83, width :83}}>
        </Image>
        </View>
      </ScrollView>
    );
  }
}