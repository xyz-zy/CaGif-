import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View, TouchableHighlight, AsyncStorage } from 'react-native';
/*
//var AppleHealthKit = require('react-native-apple-healthkit');
import AppleHealthKit from 'react-native-apple-healthkit';

const HKPERMS = AppleHealthKit.Constants.Permissions;
const HKOPTIONS = {
    permissions: {
        read:  [
            HKPERMS.StepCount
        ]
    }
};
 

export default class CashIn extends Component{
  constructor(props){
    super(props);
    
    this.state = {steps: "None"};
    
    
    let lastStepTimeStamp = -1;
    let lastNumSteps = -1;
    let currentNumSteps = -1;
    AppleHealthKit.isAvailable((err: Object, available: boolean) => {
    if(available){
        this.state = {steps: "HK Available"};
    }
    });
    AppleHealthKit.initHealthKit(HKOPTIONS: Object, (err: Object, res: Object) => {
    if(err) {
        this.setState({steps: "Error Initializing HealthKit"});
        return;
    }
    // healthkit initialized... 
    AsyncStorage.removeItem('HealthData:lastTimestamp');
    let lastTimeStamp = this.getKeyFromStorage('HealthData:lastTimestamp');
    if(lastTimeStamp == undefined){
      lastTimeStamp = (new Date()).toISOString();
      this.setKeyToStorage('HealthData:lastTimestamp',lastTimeStamp);
    }
    
    let checker = new Date(lastTimeStamp);
    if(checker == NaN){
      lastTimeStamp = (new Date()).toISOString();
      this.setKeyToStorage('HealthData:lastTimestamp',lastTimeStamp);
    }
      
      
    let aggregate = this.getKeyFromStorage("HealthData:aggregate");
    if(aggregate == undefined){
      aggregate = 0;
      this.setKeyToStorage("HealthData:aggregate",aggregate);
    }
//    lastTimeStamp = (new Date(2016,10,21)).toISOString();
    aggregate = aggregate + this.getStepCountsBetween(lastTimeStamp);
    lastTimeStamp = (new Date()).toISOString();
    this.setKeyToStorage("HealthData:aggregate",aggregate);
    this.setKeyToStorage('HealthData:lastTimestamp', lastTimeStamp);
});
  }

  
  
  
  render() {
    return (
      <View style= {{}}>
        <Text style={{paddingTop:10}}> CashIn </Text>
        <Text>{this.state.steps}</Text>
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
  async getKeyFromStorage(key){
    try {
      const value = await AsyncStorage.getItem("@" + key);
      if (value !== null){
        return value;
      } else {
        return undefined;
      }
    } catch (error) {
      this.setState({steps: "Error reading " + key + " from storage."})
    }
  }

  async setKeyToStorage(key,value){
    try {
      await AsyncStorage.setItem("@" + key,value);
    } catch (error) {
      this.setState({steps: "Error setting " + key + "to storage."});
    }
  }

  getStepCountsBetween(startTS){
    if(!startTS){
      return;
    }
    
    let options = {
      startDate: startTS  // required
    };
    
    AppleHealthKit.getStepCount(options, (err, res) => {
      if(err){
        this.setState({steps: "Error reading " + err + " from storage."});
        return;
      }
        return res.value;
      }
    );
    
  }


}
*/

class CashIn extends Component {
	render() {
		return <View> </View>;
	}
}