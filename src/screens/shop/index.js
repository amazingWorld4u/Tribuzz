import {createStackNavigator, StackViewTransitionConfigs} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ShopScreen from './main';
import ShopDetails from './details';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcons from 'react-native-vector-icons/FontAwesome';
import config from '../../config/config';
import React from 'react';
const Stack = createStackNavigator({
    Shop : {
        screen : ShopScreen,
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