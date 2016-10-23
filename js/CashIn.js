import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View, TouchableHighlight, AysncStorage } from 'react-native';

var AppleHealthKit = require('react-native-apple-healthkit');
 

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
    AppleHealthKit.isAvailable((err: Object, available: boolean) => {
    if(available){
        this.state = {steps: "HK Available"};
    }
    });
//    AppleHealthKit.initHealthKit(options: Object, (err: Object, res: Object) => {
//    if(err) {
//        this.setState({steps: "Error Initializing HealthKit"});
//        return;
//    }
//    // healthkit initialized... 
//    let lastTimeStamp = this.getKeyFromStorage('HealthData:lastTimestamp');
//    if(lastTimeStamp == undefined){
//      lastTimeStamp = (new Date()).toISOString();
//      this.setKeyToStorage('HealthData:lastTimestamp',curTimeStamp);
//    }
//    let aggregate = this.getKeyFromStorage("HealthData:aggregate");
//    if(aggregate == undefined){
//      aggregate = 0;
//      this.setKeyToStorage("HealthData:aggregate",aggregate);
//    }
//    let now = (new Date()).toISOString();
//    aggregate = aggregate + this.getStepCountsBetween(lastTimeStamp,now);
//    lastTimeStamp = now;
//    this.setKeyToStorage("HealthData:aggregate",aggregate);
//    this.setKeyToStorage('HealthData:lastTimestamp', lastTimeStamp);
//});
  }
  render() {
    return (
      <View style= {{}}>
        <Text style={{paddingTop:10}}> CashIn </Text>
        <Text>this.state.text</Text>
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

  async setKeyToStorage(key,value){
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
    
    let retVal = -1;
    AppleHealthKit.getDailyStepCountSamples(options, (err, res) => {
      if(this._handleHealthKitError(err, 'getDailyStepCountSamples')){
        return;
      }
        retVal = res[0].value;
      }
    );
    
    return retVal;
  }


}