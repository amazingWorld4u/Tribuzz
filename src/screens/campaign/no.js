import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import config from '../../config/config';
import Button from '../../components/common/button';
const {fonts, icons} = config;

export default class Yes extends Component{
    constructor(props){
        super(props);

    }
    render(){
        const data = [
            {
                title : 'TU NON CISD'
            },
            {
                title : 'IL TUO PROFILO NON E PURLICO.'
            },
            {
                title : 'CONDIVIDI NEL JUNGLE LA TUA FOTO'
            }
        ]
        return(
            <View>
                <View style = {styles.container}>
                    {data.map((item,index)=>{
                        return(
                            <View style={styles.itemCont}>
                                <Text style = {styles.desc}>
                                0{index+1}{"\n\n"}
                                {item.title} 
                                </Text>
                            </View>
                        )
                    })}
                </View>
                <View style = {{alignItems : 'center', marginVertical : 10}}>
                <Button
                title={"Regole Tribuzz"}
                buttonStyle={{width : Dimensions.get('window').width/2}}
                />
                </View>
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    itemCont : {
        flex : 1,
        margin : 1,
        backgroundColor : 'rgb(0,200,100)'
    },
    container : {
        flexDirection : 'row'
    },
    desc : {
        fontFamily : fonts.msMedium,
        color : 'black',
        padding : 10
    }
})