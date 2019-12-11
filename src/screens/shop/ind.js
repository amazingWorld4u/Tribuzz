import Product from './products';
import Limitation from './limitations';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import config from '../../config/config';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ENIcons from 'react-native-vector-icons/Entypo'
const {fonts,colors,icons} = config;
const Tab = createMaterialTopTabNavigator({
    Product : {
        screen : Product
    },
    Limit : {
        screen : Limitation
    }
},{
    tabBarOptions : {
        style : {backgroundColor : 'white'},
        activeTintColor : 'green',
        labelStyle : {fontFamily : fonts.msBold},
        indicatorStyle : {backgroundColor : 'green', position : 'absolute', top : 0},
        inactiveTintColor : 'black',
    },
}
)
export default createAppContainer(Tab)