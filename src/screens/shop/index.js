import {createStackNavigator, StackViewTransitionConfigs} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ShopScreen from './main';
import ShopDetails from './details';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcons from 'react-native-vector-icons/FontAwesome';
import config from '../../config/config';
import React from 'react';
import {TouchableOpacity, TextInput, View, Text} from 'react-native';

const Stack = createStackNavigator({
    Shop : {
        screen : ShopScreen,
        navigationOptions : ({navigation}) => {
            if(!navigation.getParam('search',false)){
                return({
                    title : "Shop",
                    headerTitleStyle : {
                        fontFamily : config.fonts.msBold,
                        color : 'white',
                    },
                    headerLeft : 
                    <TouchableOpacity onPress={()=>{navigation.navigate('Campaign')}} >
                    <MCIcons name={config.icons.leftChevron} color="white" size={30} />
                    </TouchableOpacity>,
                    headerRight : 
                    <TouchableOpacity onPress={()=>{navigation.setParams({search : true})}}>
                    <FAIcons name={"search"} color="white" size={20} />
                    </TouchableOpacity>
                    ,
                    headerStyle : {
                        backgroundColor : config.colors.blue1
                    }
                })
            }
            else{
                return({
                    header : 
                    <View style={{flexDirection : 'row', alignItems : 'center', height : 55, elevation : 5, backgroundColor : 'white'}}>
                    <TextInput 
                    style={{backgroundColor : 'rgb(220,220,220)',flex : 1, padding : 5,
                     fontFamily : config.fonts.msBold, borderRadius : 10, marginLeft : 5
                    }} 
                    placeholder="Enter something"
                    />
                    <TouchableOpacity 
                    style={{justifyContent : 'center', borderRadius : 10}}
                    onPress={()=>{navigation.setParams({search : false})}}>
                        <Text style={{marginHorizontal : 10, fontFamily : config.fonts.msSBold, borderRadius : 10}}>Cancel</Text>
                    </TouchableOpacity>
                    </View>
                })
            }
            
        }
    },
    Detail : {
        screen : ShopDetails,
        navigationOptions : {
            title : "Shop",
            headerTitleStyle : {
                fontFamily : config.fonts.msBold,
                color : 'white',
            },
            headerLeft : <MCIcons name={config.icons.leftChevron} color="white" size={30} />,
            headerRight : <FAIcons name={"search"} color="white" size={20} />,
            headerStyle : {
                backgroundColor : config.colors.blue1
            }
        }
    }
},
{
    headerLayoutPreset : 'center'
})

export default createAppContainer(Stack);