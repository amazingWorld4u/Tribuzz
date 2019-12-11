import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import assets from '../../assets/index';
// import { AssertionError } from 'assert';


export default class HeaderImg extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.imgContainer}>
                    <Image
                    style = {{resizeMode : 'contain', width : 50, height : 50}}
                    source = {assets.headerImg}
                    />
                </View>
                    <Image
                    style = {{resizeMode : 'contain', width : 50, height : 30}}
                    source= {assets.headerTitleImg}
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    img : {
        borderRadius : 100,
        width : 70, 
        height : 70,
        
    },
    imgContainer:{
         padding : 5,
         borderRadius : 100,
         backgroundColor : 'rgb(39, 61, 71)',
         width : 80,
         height : 80,
         alignItems : 'center',
         justifyContent : 'center'
    },
    label : {
        textAlign : 'center',
        fontWeight : 'bold'
    },
    container : {
        alignItems : 'center'
    }
})