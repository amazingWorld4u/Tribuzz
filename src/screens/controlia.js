import React, {Component} from 'react';
import {Text, View, StyleSheet, ImageBackground, TouchableOpacity, Dimensions} from 'react-native';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ENIcons from 'react-native-vector-icons/Entypo';
import config from '../config/config';
import Button from '../components/common/button';
const {fonts, icons, colors} = config;

export default class Controlia extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        const data = [
            {
                name : 'Marianna Napolitano',
                subTitle : 'some title here',
                hashtag : '#welcomeToTribuzz',
                campaignName : 'Welcome to Jungle'
            }
        ]
        const {name,subTitle,hashtag,campaignName} = data[0];
        return(
            <View style={{flex : 1}}>
                <View style={{backgroundColor : 'rgb(200,210,200)', margin : 10}}>
                    <View style={{margin : 20}}>
                        <View>
                        <Text style={styles.name}>{name} </Text>
                        <Text style={styles.subTitleStyle}>{subTitle} </Text>
                        </View>
                        
                        <View style={{alignItems : 'center'}}>
                            <ImageBackground 
                            style = {styles.imgStyle}
                            >
                                <View style = {{flex : 1, padding : 10}}>
                                    <View>
                                        <Text style={styles.campaignTitle}>{campaignName} </Text>
                                        <Text style={styles.hashTitle}>{hashtag} </Text>
                                    </View>
                                    <View style={styles.likeBtnCont}>
                                        <TouchableOpacity 
                                        onPress={()=>{}}
                                        style={{margin : 5}}
                                        >
                                            <View>
                                                <MCIcons 
                                                name={"thumb-up-outline"} 
                                                color="white" 
                                                size={20} 
                                                />
                                                <Text style={styles.numb}>
                                                    30
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity 
                                        onPress={()=>{}} 
                                        style={{margin : 5}}

                                        >
                                            <View>
                                                <MCIcons 
                                                name={icons.share} 
                                                color="white" 
                                                size={20} 
                                                />
                                                <Text style={styles.numb}>6</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View> 
                            </ImageBackground>
                        </View>
                    </View>
                </View>
                <View>
                <View style={styles.iconsCont}>
                    <View style={styles.iconCont}>
                        <MCIcons name={icons.checkBox} color={colors.blue1} size={25} />
                        <Text style ={styles.numb}>97% </Text>
                        <Text style={styles.iconTxt}>post approvati</Text>
                    </View>
                    <View style={styles.iconCont}>
                        <MCIcons name={icons.share} color={colors.blue1} size={25} />
                        <Text style ={styles.numb}>{45} </Text>
                        <Text style={styles.iconTxt}>affidabilità</Text>
                    </View>
                    <View style={styles.iconCont}>
                        <ENIcons name={icons.flag} color={colors.blue1} size={25} />
                        <Text style ={styles.numb}>{1} </Text>
                        <Text style={styles.iconTxt}>campagne</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection : 'row', justifyContent : 'space-between', margin : 10}}>
                    <Button
                    title="APPROVATO"
                    icon={<MCIcons name={icons.checkCircle} color="white" size={30} />}
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.labelStyle}
                    style={{flex : 1, margin : 2}}
                    onPress={()=>{}}
                    />
                    <Button
                    title="NON APPROVATO"
                    icon={<MCIcons name={icons.closeCircle} color="white" size={30} />}
                    buttonStyle={[styles.buttonStyle,{backgroundColor : 'red'}]}
                    titleStyle={styles.labelStyle}
                    style={{flex : 1, margin : 2}}
                    onPress={()=>{}}
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    iconsCont : {
        flexDirection : 'row',
        justifyContent : 'center'
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
        backgroundColor : 'rgb(250,245,250)',
        width : 90,
         margin : 2,
        alignItems : 'center',padding : 5
    },
    name : {
        fontFamily : fonts.msSBold,
        color : 'black'
    },
    postCont : {

    },
    buttonStyle : {
        borderRadius : 5,
        // width : (Dimensions.get('window').width/2)-4
        width : null,
        backgroundColor : config.colors.green1,
        borderWidth : 0
    },
    subTitleStyle : {
        fontFamily : fonts.msMedium,
        color : 'gray',
        fontSize : 11
    },
    imgStyle : {
        width : 100+'%',
        height : 300,
        backgroundColor : 'rgb(180,180,180)'
    },
    likeBtnCont : {
        position : 'absolute',
        flexDirection : 'row',
        bottom : 0,
        right : 0
    },
    labelStyle : {
        color : 'white'
    },
    campaignTitle : {
        fontFamily : fonts.msBold,
        color :'black'
    },
    hashTitle : {
        fontFamily : fonts.msRegular,
        color : 'red',
        fontSize : 11
    }
})