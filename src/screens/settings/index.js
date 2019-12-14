import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import Main from './main';
import About from './about';
import EditProfile from './editProfile';
import GeneralSettings from './general';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import config from '../../config/config'
import { TouchableOpacity } from 'react-native';
import Eliminate from './eliminateAccount';
import Credit from './credit';
const {fonts, icons, colors} =  config;
const Stack = createStackNavigator({
    SettingsHome : {
        screen : Main
    },
    EditProfile : {
        screen : EditProfile
    },
    About : {
        screen : About
    },
    GeneralSettings : {
        screen : GeneralSettings
    },
    Eliminate : {
        screen : Eliminate
    },
    Credit : {
        screen : Credit
    }
},
{
    headerLayoutPreset : 'center',
    defaultNavigationOptions : ({navigation})=>{
        console.log('new nav',navigation);
        let da = data.filter(obj=> obj.routeName==navigation.state.routeName)[0];
    return({
        headerLeft : 
        <TouchableOpacity onPress = {()=>{da.title=="Settings" ? navigation.navigate('Home') : navigation.goBack()}}>
        <MCIcons 
        name={da.leftIcon} 
        color={colors.blue1} 
        size={da.leftIcon=='close'?25 : 30}  />
        </TouchableOpacity>
        ,
        title : da.title,
        headerTitleStyle : {textAlign : 'center', fontFamily : fonts.msBold, fontSize : 16, color : colors.blue1},
        headerRight : 
        <TouchableOpacity>
            <MCIcons name={da.rightIcon} color={colors.blue1} size={30} />
        </TouchableOpacity>,
        headerStyle : {
            backgroundColor : 'rgb(230,230,230)'
        }
    })
    }
}
)
export default Stack;

let data = [
    {
        routeName : 'SettingsHome',
        leftIcon : 'close',
        rightIcon : icons.menu,
        title : 'Settings'
    },
    {
        routeName : 'EditProfile',
        leftIcon : icons.leftChevron,
        rightIcon : icons.menu,
        title : 'modifica profilo'
    },
    {
        routeName : 'About',
        leftIcon : icons.leftChevron,
        rightIcon : icons.menu,
        title : 'About Us'
    },
    {
        routeName : 'GeneralSettings',
        leftIcon : icons.leftChevron,
        rightIcon : icons.menu,
        title : 'impostazioni generali'
    },
    {
        routeName : 'Eliminate',
        leftIcon : icons.leftChevron,
        rightIcon : icons.menu,
        title : 'modifica profilo'
    },
    {
        routeName : 'Credit',
        leftIcon : icons.leftChevron,
        rightIcon : icons.menu,
        title : 'Credits'
    },
]