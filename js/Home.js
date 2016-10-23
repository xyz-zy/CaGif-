import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View, TouchableHighlight, Image, ScrollView, ListView } from 'react-native';

  class Sprite extends Component {
    constructor(props) {
      super(props);

      // Toggle the state every second
      setInterval(() => {
        this.setState({ health: health - 1, fullness: fullness - 1, happiness: happiness - 1});
      }, 3000);
    }
  }

export default class Home extends Component{

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
     dataSource: ds.cloneWithRows([<Image source={require('../graphics/hunger0.png')}></Image>,<Image source={require('../graphics/hunger0.png')}></Image>])
    };
    // this.healthStats = {health: 100, fullness: 100, happiness: 100};
    // setInterval(() => {
    //     this.healthStats({ health: this.healthStats.health - 1, fullness: this.healthStats.fullness - 1, happiness: this.healthStats.happiness - 1});
    //   }, 3000);
  }

  render() {
    //let display = (this.healthStats[0] == 100) ? '../graphics/hunger0.png' : '../graphics/hunger3.png';
          //     <View>
          // <Image source = {display} style = {{width: 50, height: 50}}></Image>
          // </View>
    this.state.dataSource[0]
    return (
      <Image 
          source = {require('../graphics/background.png')}
          style = {{flex: 1, width: null, height: null}}>

          {this.renderButtons()}
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData}</Text>}
          />
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