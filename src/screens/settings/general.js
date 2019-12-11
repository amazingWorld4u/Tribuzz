import React, {Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity, SectionList} from 'react-native';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import config from '../../config/config';
import { Switch } from 'react-native-gesture-handler';
const {icons, fonts} = config;
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
                        title : 'Facebook',
                        rightIconType : 'icon',
                    },
                    {
                        leftIcon : icons.twitter,
                        title : 'Twitter',
                        rightIconType : 'icon',
                    },
                    {
                        leftIcon : icons.insta,
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
                        title : 'accesso alla galleria',
                        rightIconType : 'icon',
                    },
                    {
                        leftIcon : icons.camera,
                        title : 'accesso alla fotocamera',
                        rightIconType : 'icon',
                    },
                    {
                        leftIcon : icons.location,
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
                />
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
                    <View 
                    style = {styles.leftIconCont}>
                        <Text>
                            <MCIcons 
                            name={item.leftIcon} 
                            color="rgb(210,210,210)" 
                            size={30} />
                        </Text>
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
        backgroundColor : 'rgb(200,210,200)',
        fontFamily : fonts.msSBold
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