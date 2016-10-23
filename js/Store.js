import React, { Component} from 'react';
import { AppRegistry, Navigator, Text, View, TouchableHighlight, Image, ScrollView, StyleSheet} from 'react-native';

export default class Store extends Component{
    constructor(props) {
        super(props);
        this.state = {changeInPP:0};
    }

    render() {
        console.log('inventory state' + this.state.hungerV);
        return (
            <Image
                source = {require('../graphics/storeBackground.jpg')}
                style = {{flex: 1, width: null, height: null, alignItems: 'center'}}>
                {this.renderFood()}
                {this.renderBackButton()}
            </Image>
        );
    }

    renderBackButton() {
        //             this._reactInternalInstance._currentElement._owner._instance.setState({hv: this.state.hungerV});
        return(
            <View flex = {1} justifyContent = 'center'>
                <TouchableHighlight onPress= {() => {
                    this.props.addPP(this.state.changeInPP);
                    this.props.navigator.pop();
                }}>
                    <Image source = {require('../graphics/back.png')} style = {{width: 83, height: 83}}/>
                </TouchableHighlight>
            </View>
        );
    }

    renderFood() {
       return(
            <View flex = {2} flexDirection = 'column' justifyContent = 'space-between' marginTop = {200}>
                <ScrollView horizontal = {true} alignSelf = 'center' maxHeight = {83}>
                    <TouchableHighlight onPress={() => {
                        this.buy(20)
                    }}>
                        <Image
                            style={{width: 83, height: 83}}
                            source={require('../graphics/canFish.png')}>
                        </Image>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {
                        this.buy(20);
                    }}>
                        <Image
                            style={{width: 83, height: 83}}
                            source={require('../graphics/foodBowl2.png')}>
                        </Image>
                    </TouchableHighlight>
                </ScrollView>
                <ScrollView horizontal = {true} alignSelf = 'center' maxHeight = {83}>
                    <TouchableHighlight onPress={() => {
                        this.buy(20);
                    }}>
                        <Image
                            style={{width: 83, height: 83}}
                            source={require('../graphics/yarn.jpg')}>
                        </Image>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {
                        this.buy(20);
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

    buy(cost) {
        this.state.changeInPP = this.state.changeInPP + cost;
    }
}
