import React, {Component} from 'react';
import {Text, View, ViewPropTypes, ScrollView, StyleSheet, Image} from 'react-native';
import SocialLogin from '../components/common/socialLogin';
import CampaignList from '../components/campaign/CampaignList';
import Button from '../components/common/button';
import ProgressCircle from 'react-native-progress-circle';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ENIcons from 'react-native-vector-icons/Entypo';
import config from '../config/config';
import Posts from '../components/campaign/posts';
const {fonts, icons, assets} = config;
export default class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <ScrollView style = {{flex : 1}}>
                <View style = {{flexDirection : 'row', marginVertical : 10}}>
                    <View style = {{flex : 0.3}}>
                        <Image
                        source={assets.loading}
                        style={{width : 80+'%', height : 120}}
                        resizeMode="contain"
                        />
                    </View>
                    <View style = {{flex : 0.7, justifyContent : 'flex-end'}}>
                        <View style = {{flexDirection : 'row', alignItems : 'center', justifyContent : 'space-between'}}>
                            <View>
                            <Text style = {styles.name}>Marianna Napolitano</Text>
                            <Text style={styles.username}>@marianna</Text>
                            </View>
                            <View>
                                <Image
                                source={assets.addFriend}
                                style={{width : 20, height : 20, marginRight : 20}}
                                resizeMode="contain"
                                />
                            </View>
                            {/* <MCIcons name={icons.accountPlus} color="green" size={20} /> */}
                        </View>
                        <View style = {{alignItems : 'center', marginVertical : 10, flexDirection : 'row'}}>
                                <Image
                                source={assets.anim}
                                style={{width : 20, height : 20, marginRight : 5}}
                                resizeMode="contain"
                                />
                                <Image
                                source={assets.anim1}
                                style={{width : 20, height : 20, marginRight : 5}}
                                resizeMode="contain"
                                />
                            <Button
                            title="più info"
                            buttonStyle = {{padding : 5}}
                            onPress ={()=>{}}
                            />
                        </View>
                    </View>
                </View>
                <View>
                <View style={styles.iconsCont}>
                    <View style={styles.iconCont}>
                        {/* <MCIcons name={icons.like} color="rgb(200,210,200)" size={25} /> */}
                        <Image source={assets.camp} style={{width : 30, height : 30}} resizeMode="contain" />

                        <Text style ={styles.numb}>{40} </Text>
                        <Text style={styles.iconTxt}>Wumba</Text>
                    </View>
                    <View style={styles.iconCont}>
                        <ENIcons name={icons.flag} color="rgb(0,200,100)" size={25} />
                        <Text style ={styles.numb}>{10} </Text>
                        <Text style={styles.iconTxt}>Campagne</Text>
                    </View>
                    <View style={styles.iconCont}>
                        <MCIcons name={icons.like} color="rgb(0,200,100)" size={25} />
                        <Text style ={styles.numb}>{1} </Text>
                        <Text style={styles.iconTxt}>like</Text>
                    </View>
                    <View style={styles.iconCont}>
                        {/* <MCIcons name={icons.like} color="white" size={25} /> */}
                        <Image source={assets.share_green} style={{width : 30, height : 30}} resizeMode="contain" />
                        <Text style ={styles.numb}>{5} </Text>
                        <Text style={styles.iconTxt}>share</Text>
                    </View>
                </View>
                </View>
                <View style={{marginVertical : 10}}>
                    <Text style={{fontFamily : fonts.msBold, padding : 10}}>Trofei</Text>
                    <View style={{flexDirection : 'row', justifyContent : 'center'}}>
                        <View style={styles.trophyCont}>
                            <View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center'}}>
                            <View style={{flexDirection : 'row', alignItems : 'center', flex : 1}}>
                                <Image
                                source={assets.coin}
                                style={{width : 10, height : 10}}
                                resizeMode="contain"
                                />
                                <Text style={{fontSize : 9}}> 100</Text>
                            </View>
                                
                                <Text style={{fontSize : 9}}>1/1</Text>
                            </View>

                            <Image
                            source={assets.trophy1}
                            style={styles.trophyImg}
                            resizeMode="contain"
                            />
                            <Text style={styles.trophyText}>
                            Il benvenuto
                            </Text>
                        </View>
                        <View style={styles.trophyCont}>
                        <View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center'}}>
                            <View style={{flexDirection : 'row', alignItems : 'center', flex : 1}}>
                                <Image
                                source={assets.coin}
                                style={{width : 10, height : 10}}
                                resizeMode="contain"
                                />
                                <Text style={{fontSize : 9}}> 300</Text>
                            </View>
                                
                                <Text style={{fontSize : 9}}>
                                    <MCIcons name="thumb-up" size={10} color="gray" />100
                                </Text>
                            </View>
                            <Image
                            source={assets.trophy2}
                            style={styles.trophyImg}
                            resizeMode="contain"
                            />
                            <Text style={styles.trophyText}>
                            La Star
                            </Text>
                        </View>
                        <View style={styles.trophyCont}>
                        <View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center'}}>
                            <View style={{flexDirection : 'row', alignItems : 'center', flex : 1}}>
                                <Image
                                source={assets.coin}
                                style={{width : 10, height : 10}}
                                resizeMode="contain"
                                />
                                <Text style={{fontSize : 9}}> 150</Text>
                            </View>
                                
                                <Text style={{fontSize : 9}}>
                                    <MCIcons name={icons.location} size={9} color="gray" />15/15
                                </Text>
                            </View>
                            <Image
                            source={assets.trophy3}
                            style={styles.trophyImg}
                            resizeMode="contain"
                            />
                            <Text style={styles.trophyText}>
                            Il runner
                            </Text>
                        </View>
                        {/* <View style={styles.trophyCont}>
                            <Image
                            source={assets.trophy1}
                            style={styles.trophyImg}
                            resizeMode="contain"
                            />
                        </View> */}
                    </View>
                </View>
                
                <View style=  {{marginTop : 20}}>
                    <Text style = {{fontFamily : fonts.msSBold, padding : 10}}>Le foto con più like</Text>
                    {/* <CampaignList/> */}
                    <Posts {...this.props} navigateTo ={"View"} />
                </View>
                <View style ={{alignItems : 'center', marginVertical : 10}}>
                    <Button
                    title="Invita un amico"
                    buttonStyle = {{padding : 5, width : 180}}
                    onPress = {()=>{}}
                    />
                </View>
                <View>
                    <Text style = {styles.name}>
                        Connetti il tuo profilo
                    </Text>
                    <SocialLogin/>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    iconsCont : {
        flexDirection : 'row',
        // justifyContent : 'space-between'
    },
    iconTxt : {
        fontFamily : fonts.msSBold,
         fontSize : 9,
         color : 'rgb(0,200,100)',
         textAlign : 'center'
    },
    numb : {
        fontFamily : fonts.msSBold,
        color : 'rgb(0,200,100)',
        textAlign : 'center'
    },
    iconCont : {
        backgroundColor : 'rgb(245,245,245)',
        padding : 10,
        flex : 1, margin : 1,
        alignItems : 'center',
    },
    name : {
        fontFamily : fonts.msSBold,
        color : 'black',
        fontSize : 17
    },
    username : {
        color : 'rgb(210,210,210)',
        fontFamily : fonts.msRegular,
        fontSize : 9
    },
    trophyImg : {
        width : 80,
        height : 80,
    },
    trophyCont : {
        backgroundColor : 'rgb(246,246,246)', padding : 10,
        margin : 1,
        flex : 1,
        alignItems : 'center'
        
    },
    trophyText : {
        fontSize : 10, 
        fontFamily : fonts.msSBold,
        textAlign : 'center',
        color : 'rgb(180,180,180)'
    }
})