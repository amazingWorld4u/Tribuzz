import React, {Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity, ScrollView} from 'react-native';
import HeaderImg from '../../components/common/labelImg';
// import { ScrollView } from 'react-native-gesture-handler';
import config from '../../config/config';
const {fonts} = config;


export default class About extends Component{
    constructor(props){
        super(props);
        this.state = ({});
    }
    render(){
        return(
            <ScrollView style = {{flex : 1, backgroundColor : 'rgb(200,210,200)'}}>
                <View style = {{marginTop : 5}}>
                <HeaderImg/>
                </View>
                <Text style = {{textAlign : 'center', margin : 20, fontFamily : fonts.msSBold, padding : 20}}>
                    {text}
                </Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    }
})

const text = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet 
dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis 
nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie 
consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent 
luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing 
elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit 
amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
 Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
 suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate`