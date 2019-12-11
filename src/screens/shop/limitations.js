import {View, Text, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, FlatList, Image} from 'react-native';
import React, {Component} from 'react';
import TopList from '../../components/campaign/TopList';
import config from '../../config/config';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ENIcons from 'react-native-vector-icons/Entypo'


export default class Limitation extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <FlatList
            data={data}
            renderItem={this.renderItem}
            keyExtractor={(item,index)=> index.toString()}
            numColumns={3}
            />
        )
    }
    renderItem = ({item,index}) =>{
        return(
            <View style={{flex : 1, margin : 2}}>
                <Image
                source={{uri : ''}}
                style={{height : 150, backgroundColor : 'gray'}}
                />
            </View>
        )
    }
}

const data = [1,2,2,4,4,4,44,5];