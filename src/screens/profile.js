import React, {Component} from 'react';
import {Text, View, ViewPropTypes, ScrollView, StyleSheet} from 'react-native';
import SocialLogin from '../components/common/socialLogin';
import CampaignList from '../components/campaign/CampaignList';
import Button from '../components/common/button';
import ProgressCircle from 'react-native-progress-circle';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ENIcons from 'react-native-vector-icons/Entypo';
import config from '../config/config';
import Posts from '../components/campaign/posts';
const {fonts, icons} = config;
export default class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <ScrollView style = {{flex : 1}}>
                <View style = {{flexDirection : 'row', marginVertical : 10, alignItems : 'center'}}>
                    <View style = {{flex : 0.3}}>
                        {/* <ProgressCircle
                        percent={75}
                        color="green"
                        /> */}
                        <ProgressCircle
                        percent={75}
                        radius={40}
                        borderWidth={3}
                        color="green"
                        shadowColor="#999"
                        bgColor="#fff"
                        >
                        <Text style={styles.name}>{'75%'}</Text>
                        </ProgressCircle>
                    </View>
                    <View style = {{flex : 0.7}}>
                        <View style = {{flexDirection : 'row', alignItems : 'center', justifyContent : 'space-around'}}>
                            <Text style = {styles.name}>Marianna Napolitano</Text>
                            <MCIcons name={icons.accountPlus} color="green" size={20} />
                        </View>
                        <View style = {{alignItems : 'center', marginVertical : 10}}>
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
                        <MCIcons name={icons.like} color="rgb(200,210,200)" size={25} />
                        <Text style ={styles.numb}>{40} </Text>
                        <Text style={styles.iconTxt}>Likes</Text>
                    </View>
                    <View style={styles.iconCont}>
                        <MCIcons name={icons.share} color="rgb(200,210,200)" size={25} />
                        <Text style ={styles.numb}>{10} </Text>
                        <Text style={styles.iconTxt}>Share</Text>
                    </View>
                    <View style={styles.iconCont}>
                        <ENIcons name={icons.flag} color="rgb(200,210,200)" size={25} />
                        <Text style ={styles.numb}>{1} </Text>
                        <Text style={styles.iconTxt}>campagne</Text>
                    </View>
                    <View style={styles.iconCont}>
                        <MCIcons name={icons.like} color="white" size={25} />
                        <Text style ={styles.numb}>{5} </Text>
                        <Text style={styles.iconTxt}>trophies</Text>
                    </View>
                </View>
                </View>
                <View>
                    {/* <Text>Trofei</Text> */}
                    <View>

                    </View>
                </View>
                {/* <View>
                    <Text>Trofei</Text>
                    <View>
                        
                    </View>
                </View> */}
                <View style=  {{marginTop : 20}}>
                    <Text style = {[styles.name,{textAlign : 'center'}]}>Le foto con più like</Text>
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