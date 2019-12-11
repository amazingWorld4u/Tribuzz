import React, {Component} from 'react';
import {Text, View} from 'react-native';



export default class Campaign extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <View>
                <Text onPress = {()=>{this.setParam()}} >Campaign screen</Text>
                
            </View>
        )
    }
}