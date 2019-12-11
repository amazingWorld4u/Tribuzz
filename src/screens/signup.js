import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView
} from 'react-native';

import InputBox from '../components/common/inputBox';
import SocialLogin from '../components/common/socialLogin';
import LabelImg from '../components/common/labelImg';
import Button from '../components/common/button';
export default class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <View style = {{flex : 1}}>
                <View style = {{justifyContent : 'center', marginVertical : 20}}>
                    <LabelImg/>
                </View>
                <View style = {{marginHorizontal : 30, marginVertical : 20}}>
                    <InputBox
                    onChangeText={(value)=>{alert(value)}}
                    placeholder="Name cogname"
                    />
                    <InputBox
                    onChangeText={(value)=>{alert(value)}}
                    placeholder="Password"
                    />
                    <InputBox
                    onChangeText={(value)=>{alert(value)}}
                    placeholder="Tua Email"
                    />
                </View>
                <View style = {{marginVertical : 20, alignItems : 'center'}}>
                <Button
                    title = "registrati"
                    />
                </View>
                <View style={{marginVertical : 20}}>
                <SocialLogin/>
                </View>
                
                {/* <View style = {{flex : 0.3}}>
                </View> */}
            </View>
        )
    }
}