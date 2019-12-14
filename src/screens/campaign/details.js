import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ImageBackground, ScrollView, StyleSheet, Dimensions} from 'react-native';
import CampaignList from '../../components/campaign/CampaignList';
import Posts from '../../components/campaign/posts';
import config from '../../config/config';
import Button from '../../components/common/button';
const {fonts, icons} = config;
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Tab from './type';
export default class CampaignDetails extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const data = {
            title : 'Welcome to jungle',
            subtitle : 'News',
            image : '',
            description : `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod 
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci 
            tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor 
            in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at 
            vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore 
            te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh 
            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
            Days`
        }
        const {width,height} = Dimensions.get('window');
        return(
            <ScrollView style={{flex : 1}}>
                <View>
                    <ImageBackground
                    source={{uri : 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg'}}
                    style = {styles.img}
                    >
                        <View style = {styles.topHeaderContainer}>
                            
                            <TouchableOpacity>
                                <MCIcons 
                                name={icons.leftChevron} 
                                size={30} 
                                color="white"
                                />
                            </TouchableOpacity>
                            <View style = {{marginLeft : 10}}>
                                <Text 
                                style={styles.title}
                                >
                                {data.title}
                                </Text>
                                <Text 
                                style={styles.subtitle}>
                                {data.subtitle}
                                </Text>
                                </View>
                            
                        </View>
                        <View style = {styles.btnCont}>
                            <Button
                            title="connetti il tuo profilo"
                            buttonStyle={{backgroundColor : 'rgb(40, 224, 111)', width : width/2}}
                            titleStyle={{color : 'white'}}
                            />
                            <TouchableOpacity>
                                <MCIcons 
                                name={icons.location} 
                                color="rgb(40,224,111)" 
                                size={30} 
                                />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                <View>
                    <Text style={styles.descHeader}>
                        Description Campagna
                    </Text>
                    <Text style = {styles.description}>
                        {data.description}
                    </Text>
                </View>
                <Text style={styles.postHeader}>
                    I plu votati
                </Text>
                <Posts 
                {...this.props} 
                navigateTo={"LeaderBoard"}
                />
                <Tab/>
                <View>
                    <Text style={{textAlign : 'center', fontFamily : fonts.msMedium, paddingVertical : 10}}>Pubblica Il tuo Contenueto</Text>
                    <View style={{flexDirection : 'row'}}>
                        <View style={{flex : 1, alignItems : 'center',marginRight : 1 , backgroundColor : 'rgb(240,240,240)'}}>
                            <MCIcons name="image" color="rgb(200,200,200)" size={100} />
                            <Text style={{fontFamily : fonts.msRegular, color : 'rgb(180,180,180)'}}>Galleria</Text>
                        </View>
                        <View style={{flex : 1, alignItems : 'center', marginLeft : 1, backgroundColor : 'rgb(240,240,240)'}}>
                            <MCIcons name="camera" color="rgb(200,200,200)" size={100} />
                            <Text style={{fontFamily : fonts.msRegular, color : 'rgb(180,180,180)'}}>FotoCamera</Text>
                        </View>
                    </View>
                    
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    img : {
        height : 300,
        width : 100+'%'
    },
    title : {
        fontFamily : fonts.msBold,
        color : 'white'
    },
    subtitle : {
        fontFamily : fonts.msMedium,
        color : 'green'
    },
    descHeader : {
        fontFamily : fonts.msBold,
        textAlign : 'center',
        padding : 10,
        backgroundColor : 'rgb(200,210,200)'
    },
    description : {
        fontFamily : fonts.msMedium,
        color : 'black',
        textAlign : 'center',
        padding : 20
    },
    postHeader : {
        fontFamily : fonts.msSBold,
        color : 'black',
        textAlign : 'center',
        padding : 10,
        backgroundColor : 'rgb(200,210,200)'
    },
    btnCont : {
        position : 'absolute',
     bottom : 5, flexDirection : 'row',
     alignItems : 'center',
     width : 100+'%', 
    justifyContent : 'space-between'
    },
    topHeaderContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        backgroundColor : 'rgba(230,230,230,0.2)'
        }
})