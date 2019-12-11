import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Image, FlatList} from 'react-native';
import config from '../../config/config';
import Button from '../../components/common/button';
const {fonts, icons} = config;

import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ENIcons from 'react-native-vector-icons/Entypo';
export default class LeaderBoard extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const data = [
            {
                name : 'Marianna Napolitano',
                likes : 500,
                share : 20,
                campagne : 10,
                trophies : 5
            },
            {
                name : 'Innocenzo Conti',
                likes : 400,
                share : 20,
                campagne : 10,
                trophies : 4
            },
            {
                name : 'Filomena Melchiorre',
                likes : 300,
                share : 14,
                campagne : 10,
                trophies : 3
            },
            {
                name : 'Attanasio De Luca',
                likes : 250,
                share : 18,
                campagne : 10,
                trophies : 1
            },
            {
                name : 'Carmela Angrisano',
                likes : 230,
                share : 10,
                campagne : 10,
                trophies : 2
            },
            {
                name : 'Martina Ippolita',
                likes : 200,
                share : 20,
                campagne : 10,
                trophies : 1
            }
        ]
        return(
            <View style = {styles.container}>
                <FlatList
                data={data}
                renderItem={this.renderItem}
                keyExtractor={(item,index)=>index.toString()}
                />
            </View>
        )
    }
    renderItem = ({item,index})=>{
        return(
            <View style = {styles.itemContainer}>
                    <View style = {styles.imgCont}>
                        <Image
                        style = {styles.img}
                        />
                    </View>
                    <View style={styles.abtCont}>
                        <View>
                            <View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center', padding : 20}}>
                                <Text style={styles.name}>
                                    {item.name}
                                </Text>
                                <Text>
                                    <MCIcons name={icons.accountPlus} color="green" size={25} />
                                </Text>
                            </View>
                            <View style={styles.iconsCont}>
                                <View style={styles.iconCont}>
                                    <MCIcons name={icons.like} color="rgb(200,210,200)" size={25} />
                                    <Text style ={styles.numb}>{item.likes} </Text>
                                    <Text style={styles.iconTxt}>Likes</Text>
                                </View>
                                <View style={styles.iconCont}>
                                    <MCIcons name={icons.share} color="rgb(200,210,200)" size={25} />
                                    <Text style ={styles.numb}>{item.share} </Text>
                                    <Text style={styles.iconTxt}>Share</Text>
                                </View>
                                <View style={styles.iconCont}>
                                    <ENIcons name={icons.flag} color="rgb(200,210,200)" size={25} />
                                    <Text style ={styles.numb}>{item.campagne} </Text>
                                    <Text style={styles.iconTxt}>campagne</Text>
                                </View>
                                <View style={styles.iconCont}>
                                    <MCIcons name={icons.like} color="white" size={25} />
                                    <Text style ={styles.numb}>{item.trophies} </Text>
                                    <Text style={styles.iconTxt}>trophies</Text>
                                </View>
                                {/* <Text>{item.share} </Text>
                                <Text>{item.campagne} </Text>
                                <Text>{item.trophies} </Text> */}
                            </View>
                        </View>
                    </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    itemContainer : {
        flexDirection : 'row',
        margin : 10
    },
    abtCont : {
        flex : 0.7,
        backgroundColor : 'rgb(200,210,200)',
        margin : 1
    },
    imgCont : {
        flex : 0.3,
        backgroundColor : 'rgb(200,210,200)', margin : 1
    },
    iconsCont : {
        flexDirection : 'row',
        // justifyContent : 'space-between'
    },
    iconTxt : {
        fontFamily : fonts.msSBold,
         fontSize : 9,
         color : 'black',
         textAlign : 'center'
    },
    numb : {
        fontFamily : fonts.msSBold,
        color : 'black',
        textAlign : 'center'
    },
    iconCont : {
        backgroundColor : 'white',
        flex : 1, margin : 1,
        alignItems : 'center'
    },
    name : {
        fontFamily : fonts.msSBold,
        color : 'black'
    }
})