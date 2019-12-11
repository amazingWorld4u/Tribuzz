import Yes from './yes';
import No from './no';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import config from '../../config/config';
const {fonts, icons} = config;
const Tab = createMaterialTopTabNavigator({
    Si : {
        screen : Yes
    },
    No : {
        screen : No
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
export default createAppContainer(Tab);