import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TouchableHighlight, ViewPropTypes} from 'react-native';
import config from '../../config/config';
const {fonts,icons} = config;
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default class Button extends Component{
    constructor(props){
        super(props);
        this.state = ({
            btnStyle : styles.btnText
        })
    }
    render(){
        return(
            <View style = {this.props.style}>
            <TouchableHighlight
            // underlayColor="rgb(20,224,50)"
            underlayColor = "rgba(30,100,150,0.3)"
            // onPressIn = {()=>{this.setState({btnStyle : styles.btnText1})}}
            // onPressOut = {()=>{this.setState({btnStyle : styles.btnText})}}
            style = {[styles.btn,this.props.buttonStyle]}
            onPress = {()=>{this.props.onPress()}}
            >
                <View style={{alignItems : 'center'}}>
                    {this.props.icon}
                    <Text style=  {[this.state.btnStyle,this.props.titleStyle]}>{this.props.title}</Text>
                </View>
            </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btn : {
        borderRadius : 25,
        padding : 10,
        borderColor : 'rgb(40,224,111)',
        borderWidth : 2,
        width : 100
        // backgroundColor : 'red'
    },
    btnText : {
        color : 'rgb(40, 224, 111)',
        textAlign : 'center',
        fontFamily : fonts.msSBold
    },
    btnText1 : {
        color : 'white',
        textAlign : 'center'
    }
})