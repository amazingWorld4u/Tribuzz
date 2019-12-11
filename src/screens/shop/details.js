import {View, Text, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, FlatList, Image, SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import TopList from '../../components/campaign/TopList';
import config from '../../config/config';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ENIcons from 'react-native-vector-icons/Entypo';
import ShopBottomTab from './ind';
// import { FlatList } from 'react-native-gesture-handler';

const {icons,fonts, assets} = config;

export default class ShopDetail extends Component{
    constructor(props){
        super(props);
        this.state = ({

        })
    }
    render(){
        return(
            <SafeAreaView style={{flex : 1}}>
                <FlatList
                data={[0]}
                renderItem={this.renderItem}
                ListFooterComponent={()=><ShopBottomTab/>}
                keyExtractor={(item,index)=> index.toString()}
                />
            </SafeAreaView>
        )
    }
    renderItem=({item,index})=>{
        return(
            <View>
                <View>
                <Image
                source={{uri : 'https://cdn.pixabay.com/photo/2018/02/08/10/22/desk-3139127__340.jpg'}}
                style={styles.img}
                />
                <View style={{flexDirection : 'row', alignItems:'center', backgroundColor : 'rgb(250,245,250)'}}>
                    <Text style={{fontFamily : fonts.msSBold}}>Nike</Text>

                <View style={{flexDirection : 'row', justifyContent : 'flex-end', flex : 1}}>
                    <View style={styles.iconCont}>
                        {/* <MCIcons name={icons.like} color="rgb(200,210,200)" size={20} /> */}
                        <Image style={{width : 25, height : 25}} source={assets.camp1} resizeMode="contain"  />
                        <Text style ={styles.numb}>{40} </Text>
                        {/* <Text style={styles.iconTxt}>Likes</Text> */}
                    </View>
                    <View style={styles.iconCont}>
                        {/* <MCIcons name={icons.share} color="rgb(200,210,200)" size={20} /> */}
                        <Image style={{width : 25, height : 25}} source={assets.heart} resizeMode="contain"  />
                        <Text style ={styles.numb}>4/5 </Text>
                        {/* <Text style={styles.iconTxt}>Share</Text> */}
                    </View>
                    <View style={styles.iconCont}>
                        {/* <ENIcons name={icons.flag} color="rgb(200,210,200)" size={20} /> */}
                        <Image style={{width : 25, height : 25}} source={assets.cart} resizeMode="contain"  />
                        <Text style ={styles.numb}>{1} </Text>
                        {/* <Text style={styles.iconTxt}>campagne</Text> */}
                    </View>
                    </View>
                </View>
                </View>
                <View>
                    <Text style={styles.descTitle}>Descrizione</Text>
                    <View>
                        <Text style={styles.desc}>
                            {description}
                        </Text>
                    </View>
                </View>
            </View>
            
        )
    }
}
const description = `djd djksd dsjsd d dsds dds ds ds dssd d ds ds ds ds ds ds ds vcv v vcnhc d dnnsgdsjh dgsds dssdds dsds ds
sdds,jds sddsjkdsdsdjs dsjdsdddn ddjjk j k kj jkj jk kj kjkj kj jk jkjjj jj j j jjjj j j jj hhhhhhh  fdmnfdj fd fd fd fdfddf fddf
fdfdfd fd fdfd fdfdfd fd fdfd fd fd fd fd fd  fd fd dffffffgdgtt rt tr r trsdds sd sdds ds sd dsf   dsdsdsds`;





const styles = StyleSheet.create({
    img : {
        height : 300,
        backgroundColor : 'gray'
    },
    title : {

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
        textAlign : 'center',
        fontSize : 10
    },
    iconCont : {
        backgroundColor : 'white',
        // flex : 1, 
        margin : 2,
        alignItems : 'center'
    },
    name : {
        fontFamily : fonts.msSBold,
        color : 'white'
    },
    absText : {
        flexDirection : 'row',
        justifyContent : 'space-around', 
        position : 'absolute', 
        width : 100+'%', 
        bottom : 0
    },
    descTitle : {
        fontFamily : fonts.msBold,
        textAlign : 'center',
        padding : 10
    },
    desc : {
        fontFamily : fonts.msSBold,
        color : 'black',
        textAlign : 'center',
        padding : 10
    }
})