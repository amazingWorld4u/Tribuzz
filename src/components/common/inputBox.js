import React, {Component} from 'react';
import {View, TextInput, Text, StyleSheet, ViewPropTypes, TextProps, StyleProp, ViewStyle, TextStyle} from 'react-native';
import PropTypes from 'prop-types';

export default class InputBox extends Component{
    static propTypes = {
        onChangeText : PropTypes.func,
        label : PropTypes.string,
        placeholder : PropTypes.string,
        containerStyle : ViewPropTypes.style
    }
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        let {
            label,
            placeholder,
            containerStyle,
            labelStyle,
            onChangeText,
            inputStyle,
            placeholderTextColor
        } = this.props;
        return(
            <View style = {[styles.contStyle,containerStyle]}>
                <Text style = {[styles.labelStyle,labelStyle]}>{label}</Text>
                <TextInput
                style = {[styles.inputStyle,inputStyle]}
                placeholder={placeholder}
                onChangeText = {(value)=>{onChangeText(value)}}
                placeholderTextColor = {placeholderTextColor}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contStyle : {
        marginVertical : 2,
        marginHorizontal : 20
    },
    labelStyle : {
        // color : 'red',
        fontSize : 12,
        fontFamily : 'Montserrat-Medium'
    },
    inputStyle : {
        borderBottomColor : 'rgb(210,210,210)',
        borderBottomWidth : 1,
        padding : 2,
        fontFamily : 'Montserrat-Bold'
    }
})