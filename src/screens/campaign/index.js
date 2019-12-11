import Globale from './globale';
import Locale from './locale';
import CampaignDetails from './details';
import Yes from './yes';
import No from './no';
import LeaderBoardCamp from './leaderBoard';
import config from '../../config/config';
import Profile from '../profile';
const {fonts, icons} = config;
import {MaterialTopTabBar, createMaterialTopTabNavigator} from 'react-navigation-tabs';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcons from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import React,{Component} from 'react';
const TopBar = createMaterialTopTabNavigator({
    Locale : {
        screen : Locale
    },
    Globale : {
        screen : Globale
    }
},
{
    tabBarOptions : {
        style : {backgroundColor : 'white'},
        activeTintColor : 'green',
        labelStyle : {fontFamily : fonts.msBold},
        indicatorStyle : {backgroundColor : 'green'},
        inactiveTintColor : 'black',
    },
}
);
// const Home = createAppContainer(TopBar);
// export default TopBar;

const Stack = createStackNavigator({
    Home : {
        screen : TopBar,
        navigationOptions : {
            title : "Campaign",
            headerTitleStyle : {
                fontFamily : fonts.msBold,
                textAlign : 'center',
                fontSize : 17,
                color : 'white'
            },
            headerLeft : <MCIcons name={icons.leftChevron} size={30} color="white" />,
            headerStyle : {
                backgroundColor : 'rgb(39, 61, 71)'
            },
            headerRight : <FAIcons name={"search"} size={20} color="white" style={{marginRight : 5}}/>
        }
        // navigationOptions : {
        //     title : "Campaign",
        //     header : null
        // }
    },
    CampDetails : {
        screen : CampaignDetails,
        navigationOptions : {
            header : null
        }
    },
    LeaderBoard : {
        screen : LeaderBoardCamp,
        navigationOptions : {
            
            title : "Leaderboards",
            headerTitleStyle : {
                fontFamily : fonts.msBold,
                textAlign : 'center',
                fontSize : 17
            }
        }
    }
},
{
    headerLayoutPreset : "center",
    defaultNavigationOptions : {
        headerStyle : {
            backgroundColor : 'rgb(39, 61, 71)'
        }
    }
}
// {
//     defaultNavigationOptions : {
//         header : null
//     }
// }
)
export default Stack;