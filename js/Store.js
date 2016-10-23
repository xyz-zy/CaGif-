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
                style = {{flex: 1, width: null, height: null}}>
                {this.renderBackButton()}
                {this.renderFood()}
            </Image>
        );
    }

    renderBackButton() {
        //             this._reactInternalInstance._currentElement._owner._instance.setState({hv: this.state.hungerV});
        return(
            <View>
                <Text> Inventory </Text>
                <TouchableHighlight onPress= {() => {
                    console.log('calling changeState ' + this.state.hungerV)
                    this.props.addPP(this.state.changeInPP);
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
            <View marginTop = {125} marginBottom = {150} flex = {1} flexDirection = 'column' justifyContent = 'space-around'>
                <ScrollView horizontal = {true} justifyContent = 'center' maxHeight = {83}>
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
                <ScrollView horizontal = {true} justifyContent = 'center' maxHeight = {83}>
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
