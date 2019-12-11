import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default class SocialLogin extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    renderItem = (item,index)=>{
        return(
            <TouchableOpacity
            key = {index}
            style = {styles.itemsContainer}
            >
                <View style = {{flexDirection : 'column',alignItems : 'center'}}>
                    <Text style = {styles.socialIconContainer}>
                        <MCIcons
                        name={item}
                        size={25}
                        color="white"
                        />
                    </Text>
                    <Text>
                        <MCIcons
                        name="plus"
                        size={25} 
                        color="rgb(210,210,210)"
                        />
                    </Text>

                </View>
            </TouchableOpacity>
        )
    }
    render(){
        let data = ["facebook","twitter","instagram"];
        return(
            <View style = {this.props.style}>
                <Text style = {{textAlign : 'center', fontWeight : 'bold'}}>Accedi Con</Text>
                <View style = {{flexDirection : 'row', margin : 10}}>
                {data.map((item,index)=>{
                    return(
                        this.renderItem(item,index)
                    )
                })}
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    socialIconContainer : {
        width : 45,
        height : 45,
        textAlign : 'center',
        textAlignVertical : 'center',
        backgroundColor:'rgb(180,180,180)',
        borderRadius : 100
    },
    itemsContainer : {
        flex : 1,
        margin : 1,
        backgroundColor : 'rgb(240,240,240)',
        padding : 20
    }
    
})