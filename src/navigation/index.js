import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, NavigationActions} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Profile from '../screens/profile';
import Campaign from '../screens/campaign/index';
import Controlia from '../screens/controlia';
import Jungle from '../screens/jungle';
import Shop from '../screens/shop/index';
import ShopDetail from '../screens/shop/details';
import Login from '../screens/login';
import Signup from '../screens/signup';
import React from 'react';
import {View, Text, Image} from 'react-native';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ENIcons from 'react-native-vector-icons/Entypo';
import Settings from '../screens/settings/index';
import TopTab from '../screens/campaign/index';
import config from '../config/config';
import Detail from '../screens/campaign/leaderBoard';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {icons, fonts, assets} = config;
// import React from 'react';

let Icon = (props,name, Provider=MCIcons)=> <Provider name={name} color = {props.tintColor} size={25} />
let Icon1 = (props,name)=> {
    // alert(JSON.stringify(props))
    if(props.focused){
        return(
            <Image source={name[0]} style={{width : 20, height : 100+'%'}} resizeMode="contain" />
        )
    }
    return(
    <Image source={name[1]} style={{width : 20, backgroundColor : 'white', height : 100+'%'}} resizeMode="contain" />
    )
}


const BottomTabs = createBottomTabNavigator({
    Jungle :{
        screen : 
        createStackNavigator({
            Jungle : {
                screen : Jungle, 
                navigationOptions : ({navigation}) =>{
                    console.log('nav props ',navigation);
                    return({
                        title : 'Jungle',
                        headerTitleStyle : {
                        fontFamily : config.fonts.msBold,
                        color : 'white',
                        },
                        headerLeft : 
                        <TouchableOpacity onPress = {()=>{navigation.navigate("Campaign")}}>
                        <MCIcons name={icons.leftChevron} size={30} color="white" />
    
                        </TouchableOpacity>,
                        headerRight : <MCIcons name={icons.menu} size={30} color="white" />,
                        headerStyle : {
                            backgroundColor : 'rgb(39, 61, 71)'
                        }
                    })
                    
                }}},
                    {headerLayoutPreset : 'center'}),
        navigationOptions : ({navigation}) => {
            // console.log(navigation.state.params)
            return({
                tabBarIcon : (props)=> Icon1(props,[assets.camp,assets.camp]),
                tabBarVisible : true
            })
        }
    },
    Controller : {
        screen : createStackNavigator({
            Controlia : {
                screen : Controlia, 
                navigationOptions : ({navigation}) => {
                    return({
                        title : 'Controllori',
                        headerTitleStyle : {
                        fontFamily : config.fonts.msBold,
                        color : 'white',
                        },
                        headerLeft : 
                        <TouchableOpacity onPress = {()=>{navigation.navigate("Campaign")}}>
                        <MCIcons name={icons.leftChevron} size={30} color="white" />
                        </TouchableOpacity>,
                        headerRight : <MCIcons name={icons.menu} size={30} color="white" />,
                        headerStyle : {
                            backgroundColor : 'rgb(39, 61, 71)'
                        }
                    })
                    
                }
            }},
                    {headerLayoutPreset : 'center'}),
        navigationOptions : {
            tabBarIcon : (props)=> Icon(props,icons.shield,ENIcons)   
        }
    },
    Campaign : {
        screen : createStackNavigator({Campaign : {screen : Campaign, navigationOptions : {header : null}}}),
        navigationOptions : ({navigation}) => {
            console.log(navigation.state.params)
            return({
                tabBarIcon : (props)=> Icon1(props,[assets.flag1,assets.flag]),
                tabBarVisible : true
            })
        }
    },
    Shop : {
        screen : Shop,
        navigationOptions : {
            tabBarIcon : (props)=> Icon(props,"cart")   
        }
    },
    Profile : {
        screen : createStackNavigator({
            Profile : {
                screen : Profile , 
                navigationOptions : ({navigation}) => {
                    return({
                        title : 'Profilo',
                        headerTitleStyle : {
                        fontFamily : config.fonts.msBold,
                        color : 'white',
                        },
                        headerLeft : 
                        <TouchableOpacity onPress={()=>{navigation.navigate('Campaign')}}>
                        <MCIcons name={icons.leftChevron} size={30} color="white" />
                        </TouchableOpacity>,
                        headerRight : <MCIcons name={icons.menu} size={30} color="white" />,
                        headerStyle : {
                            backgroundColor : 'rgb(39, 61, 71)'
                        }
                    })
                    
                }}},
                    {headerLayoutPreset : 'center'}),
        navigationOptions : {
            tabBarIcon : (props)=> Icon(props,"account")   
        }
    }
},
{
    initialRouteName : 'Campaign',
    // backBehavior : 'history',
    tabBarOptions : {
        showLabel :false,
        activeBackgroundColor :'rgb(39, 61, 71)',
        
    },
    defaultNavigationOptions : ({navigation})=> {
        return({
        tabBarVisible : true,

    })}
}
);
function stackNavCreater(Route){
    return createStackNavigator({
        Route
    },
    {
        defaultNavigationOptions : ({navigation})=> {
            return({
                headerLeft : 
                <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}>
                <MCIcons name={icons.leftChevron} size={25} color={"black"} />
                </TouchableOpacity>,
            headerStyle : {
                backgroundColor : 'rgb(230,230,230)'
            }
            })
        }
    }
    )
}
const Drawer = createDrawerNavigator({
    Home : {
        screen : BottomTabs
    },
    Settings : {
        screen : Settings
    },
    Login : {
        screen : stackNavCreater(Login)
    },
    Signup : {
        screen : stackNavCreater(Signup)
    }
},{
    drawerType : 'slide'
})

export default createAppContainer(Drawer);
