import React, {Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity, SectionList, Image} from 'react-native';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import config from '../../config/config';
import { Switch } from 'react-native-gesture-handler';
import Button from '../../components/common/button';
const {icons, fonts, assets, colors} = config;
export default class General extends Component{
    constructor(props){
        super(props);
        this.state = ({});
    }
    render(){
        let data = [
            {
                title : 'Social',
                data : [
                    {
                        leftIcon : icons.fb,
                        leftIconType : 'icon',
                        title : 'Facebook',
                        rightIconType : 'icon',
                    },
                    {
                        leftIcon : assets.twitterCircle,
                        leftIconType : 'image',
                        title : 'Twitter',
                        rightIconType : 'icon',
                    },
                    {
                        leftIcon : assets.insta,
                        leftIconType : 'image',
                        title : 'Instagram',
                        rightIconType : 'icon',
                    }
                ]
            },
            {
                title : 'autorizzazioni',
                data : [
                    {
                        leftIcon : icons.image,
                        leftIconType : 'icon',
                        title : 'accesso alla galleria',
                        rightIconType : 'icon',
                    },
                    {
                        leftIcon : icons.camera,
                        leftIconType : 'icon',
                        title : 'accesso alla fotocamera',
                        rightIconType : 'icon',
                    },
                    {
                        leftIcon : icons.location,
                        leftIconType : 'icon',
                        title : 'accesso alla geolocalizzazione',
                        rightIconType : 'icon',
                    }
                ]
            },
            {
                title : 'notifiche',
                data : [
                    {
                        // leftIcon : '',
                        title : 'notifiche like',
                        rightIconType : 'switch',
                    },
                    {
                        // leftIcon : '',
                        title : 'notifiche followers',
                        rightIconType : 'switch',
                    },
                    {
                        // leftIcon : '',
                        title : 'tutte le notifiche',
                        rightIconType : 'switch',
                    }
                ]
            },
            
        ]
        return(
            <View style = {{flex :1}}>
                <SectionList
                sections={data}
                renderItem={this.renderItem}
                keyExtractor = {(item,index)=> index.toString()}
                ItemSeparatorComponent = {()=><View style = {{backgroundColor : 'rgb(230,230,230)', height : 1}}></View>}
                renderSectionHeader = {({section})=>{
                    return(
                        <View >
                            <Text style = {styles.sectionHeader}>
                                {section.title}
                            </Text>
                        </View>
                    )
                }}
                ListFooterComponent={this.footer}
                />
            </View>
        )
    }
    footer = ()=>{
        return(
            <View>
                <View style={{alignItems : 'center', backgroundColor : 'rgb(230,230,230)', paddingVertical : 10}}>
                    <Button
                    style={{marginVertical : 20}}
                    title="termini e condizioni"
                    buttonStyle={{width : 60+'%'}}
                    />
                </View>
                <View 
                style={{marginVertical : 10,flexDirection : 'row', justifyContent : 'space-between', marginHorizontal : 30,alignItems : 'center'}}>
                    <Text style={{fontFamily : fonts.msMedium, color : 'rgb(170,170,170)'}}>modalita notte</Text>
                    <Switch 
                    value={false} 
                    onValueChange = {()=>{}} />
                </View>
                <View style={{backgroundColor:'rgb(230,230,230)', padding: 10 }}>
                    <Text style={{color : 'black', fontFamily : fonts.msBold}}>
                        Versione Tribuzz 1.0.1
                    </Text>
                </View>
            </View>
            
        )
    }
    renderItem = ({item,index})=>{
        return(
            <View 
            style = {{marginHorizontal : 20, padding : 10}}>
                <View 
                style = {{justifyContent : 'space-between',flexDirection : 'row', alignItems : 'center'}}>
                    {item.leftIcon?
                    item.leftIconType=="icon"?
                    <View 
                    style = {styles.leftIconCont}>
                        <Text>
                            <MCIcons 
                            name={item.leftIcon} 
                            color="rgb(210,210,210)" 
                            size={30} />
                        </Text>
                    </View>
                    :
                    <View>
                        <Image source={item.leftIcon} style={{width:30, height : 30}} />
                    </View>
                    : null}
                    <View 
                    style = {styles.titleCont}>
                        <Text 
                        style = {{color : 'rgb(170,170,170)', fontFamily : fonts.msMedium}}>
                            {item.title}
                        </Text>
                    </View>
                    
                    {item.rightIconType=="icon"
                    ?
                    <View 
                    style = {styles.rightIconCont}>
                        <Text>
                            <MCIcons 
                            name={icons.plus} 
                            color ="rgb(210,210,210)" 
                            size={30} />
                        </Text>
                    </View>
                    :
                    <Switch 
                    value={false} 
                    onValueChange = {()=>{}} />
                    }
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    sectionHeader : {
        padding : 10,
        backgroundColor : 'rgb(230,230,230)',
        fontFamily : fonts.msSBold,
        color : colors.blue1
    },
    leftIconCont : {
        flex : 0.2
    },
    rightIconCont : {
        flex : 0.1
    },
    titleCont : {
        flex :0.7
    }
})