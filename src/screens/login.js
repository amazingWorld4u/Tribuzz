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
export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    setPar = ()=>{
        this.props.navigation.setParams({name : 'saurabh'});
        console.log('params ',this.props.navigation.state.params)
    }
    render(){
        return(
            <KeyboardAvoidingView style = {{flex : 1}}>
                <View style={{backgroundColor : 'rgb(230,230,230)'}}>
                <View style = {styles.headerImgContainer}>
                    <LabelImg/>
                </View>
                <View style = {{marginHorizontal : 30, marginVertical : 30}}>
                    <InputBox
                    onChangeText={(value)=>{alert(value)}}
                    placeholder="Name cogname"
                    />
                    <InputBox
                    onChangeText={(value)=>{alert(value)}}
                    placeholder="Password"
                    />
                </View>
                <View style={{flexDirection : 'row', alignItems : 'center', marginHorizontal : 40, marginBottom : 20}}>
                <Button
                style = {styles.btnContainer}
                title = "accedi"
                buttonStyle={{width : 100+'%', backgroundColor : 'rgb(0,200,100)'}}
                onPress = {()=>{this.props.navigation.navigate('Home')}}
                titleStyle={{color : 'white'}}

                />
                <Button
                style = {styles.btnContainer}
                title = "registrati"
                buttonStyle={{width : 100+'%'}}
                onPress = {()=>{this.props.navigation.navigate('Signup')}}
                />
                
                </View>
                </View>
                <SocialLogin 
                style = {styles.socialBtnContainer} 
                />
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    textS : {
        textAlign : 'center',
        fontWeight : 'bold'
    },
    socialBtnContainer : {
        marginVertical : 30,
        flex : 0.3
    },
    headerImgContainer : {
        alignItems : 'center',
        justifyContent : 'center',
        marginVertical : 30
    },
    btnContainer : {
        alignItems : 'center',
        flex : 1,
        margin : 2
    }
})