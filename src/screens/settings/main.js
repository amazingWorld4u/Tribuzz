import React, {Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity, FlatList} from 'react-native';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcons from 'react-native-vector-icons/FontAwesome';
import configs from '../../config/config';
const {icons} = configs;
export default class Main extends Component{
    constructor(props){
        super(props);
        this.state = ({});
    }
    render(){
        const list = [
            {
                leftIcon : icons.settings,
                title : 'impostazioni generali',
                navigateTo : 'GeneralSettings'
            },
            {
                leftIcon : icons.account,
                title : 'modifica profilo',
                navigateTo : 'EditProfile'
            },
            {
                leftIcon : icons.info,
                title : 'about us',
                navigateTo : 'About'
            },
            {
                leftIcon : icons.lock,
                title : 'privacy policy',
                navigateTo : 'Privacy'
            },
            {
                leftIcon : icons.plus,
                title : 'credits',
                navigateTo : 'Credits'
            },
            
        ];
        const {navigation} = this.props;
        return(
            <View style = {styles.container}>
                <FlatList
                data = {list}
                renderItem = {this.renderItem}
                keyExtractor = {(item,index)=>index.toString()}
                contentContainerStyle = {{marginTop : 50}}
                />
                <View style = {styles.bottomBtn}>
                    <View>
                    <FAIcons name="sign-out" color="black" size={30} />    
                    </View>
                <Text>  Logout</Text>
                </View>
            </View>
        )
    }
    renderItem = ({item,index}) =>{
        const {navigation} = this.props;
        return(
            <TouchableOpacity
            onPress = {()=>{navigation.navigate(item.navigateTo)}}
            style = {styles.itemContainer}
            >
                <View style = {{flexDirection : 'row', padding : 10}}>
                    <Text style = {styles.leftIconCont}>
                      <MCIcons 
                      name={item.leftIcon} 
                      color = "gray" 
                      size ={25} 
                      />  
                    </Text>
                    <View style = {{flex : 0.7}}>
                        <Text style = {styles.title}>
                            {item.title}
                        </Text>
                    </View>
                    
                    <Text style = {styles.rightIconCont}>
                      <MCIcons 
                      name={icons.rightChevron} 
                      color = "gray" 
                      size ={25} 
                      />  
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        // alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'white'
    },
    itemContainer : {
        marginVertical : 5,
        marginHorizontal : 10,
        // backgroundColor : 'red',
    },
    title : {
        // fontWeight : 'bold',
        textAlign : 'left',
        fontFamily : 'Montserrat-Bold',

    },
    leftIconCont : {
        flex : 0.2
    },
    rightIconCont : {
        flex : 0.1
    },
    bottomBtn : {
        position : 'absolute',
        bottom : 0,
        width : 100+'%', 
        padding : 10,
        flexDirection : 'row', 
        alignItems : 'center',
        borderTopColor : 'gray',
        borderTopWidth : 2
    }
})