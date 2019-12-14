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
import {Text, View , TouchableOpacity, TextInput} from 'react-native';
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
        navigationOptions : ({navigation}) => {
            if(!navigation.getParam('campSearch',false)){
                return({
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
                    headerRight : 
                    <TouchableOpacity onPress={()=>{navigation.setParams({campSearch : true})}}>
                        <FAIcons name={"search"} color="white" size={20} />
                    </TouchableOpacity>
                })
            }
            else{
                return({
                    header : 
                    <View style={{flexDirection : 'row', alignItems : 'center', height : 55, elevation : 5, backgroundColor : 'white'}}>
                    <TextInput 
                    style={{backgroundColor : 'rgb(220,220,220)',flex : 1, padding : 5,marginLeft : 5,
                     fontFamily : config.fonts.msBold, borderRadius : 10
                    }} 
                    placeholder="Enter something"
                    />
                    <TouchableOpacity 
                    style={{justifyContent : 'center', borderRadius : 10}}
                    onPress={()=>{navigation.setParams({campSearch : false})}}>
                        <Text style={{marginHorizontal : 10, fontFamily : config.fonts.msSBold, borderRadius : 10}}>Cancel</Text>
                    </TouchableOpacity>
                    </View>
                })
            }
            
            
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
        navigationOptions : ({navigation})=> {
            return({
                title : "Leaderboards",
                headerTitleStyle : {
                    fontFamily : fonts.msBold,
                    // textAlign : 'center',
                    fontSize : 17
                },
                headerStyle : {
                    backgroundColor : 'white'
                },
                headerLeft : 
                <TouchableOpacity onPress={()=>{navigation.goBack()}} >
                    <MCIcons name={icons.leftChevron} color={config.colors.blue1} size={30} />
                </TouchableOpacity>
            })
            
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