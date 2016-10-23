import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View, TouchableHighlight, AysncStorage } from 'react-native';
import AppleHealthKit from 'react-native-apple-healthkit';
 

// get the available permissions from AppleHealthKit.Constants object 
const PERMS = AppleHealthKit.Constants.Permissions;

export default class CashIn extends Component{
  constructor(props){
    super(props);
    
    this.state = {steps: "None"};
    
    let options = {
      permissions: {
        read: ["StepCount"]
      }
    }
    let lastStepTimeStamp = -1;
    let lastNumSteps = -1;
    let currentNumSteps = -1;
    AppleHealthKit.initHealthKit(options: Object, (err: Object, res: Object) => {
    if(err) {
        this.setState({steps: "Error Initializing HealthKit"});
        return;
    }
    // healthkit initialized... 
    let lastTimeStamp = this.getKeyFromStorage('HealthData:lastTimestamp');
    if(lastTimeStamp == undefined){
      lastTimeStamp = (new Date()).toISOString();
      this.setKeyToStorage('HealthData:lastTimestamp',curTimeStamp);
    }
    let aggregate = this.getKeyFromStorage("HealthData:aggregate");
    if(aggregate == undefined){
      aggregate = 0;
      this.setKeyToStorage("HealthData:aggregate",aggregate);
    }
    let now = (new Date()).toISOString();
    aggregate = aggregate + this.getStepCountsBetween(lastTimeStamp,now);
    lastTimeStamp = now;
    this.setKeyToStorage("HealthData:aggregate",aggregate);
    this.setKeyToStorage('HealthData:lastTimestamp', lastTimeStamp);
});
  }
  render() {
    return (
      <View style= {{}}>
        <Text> CashIn </Text>
        <Text></Text>
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
  getKeyFromStorage(key){
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null){
        return value;
      } else {
        return undefined;
      }
    } catch (error) {
      this.setState({steps: "Error reading " + key + " from storage."})
    }
  }

  setKeyToStorage(key,value){
    try {
      await AsyncStorage.setItem(key,value);
    } catch (error) {
      this.setState({steps: "Error setting " + key + "to storage."});
    }
  }

  getStepCountsBetween(startTS, endTS){
    if(!startTS){
      return;
    }
    let newDate;
    if(!endTS){
      endTS = (new Date()).toISOString();
    }
    let options = {
      startDate: startTS,  // required 
      endDate:   endTS         // optional; default now 
    };
  }


}