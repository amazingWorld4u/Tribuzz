import React from 'react';

import {View, Text} from 'react-native';
import config from '../../config/config';
import Button from '../../components/common/button';


export default class Eliminate extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <View style={{flex : 1}}>
                <View style={{marginVertical : 20,}}>
                    <Text style={{fontFamily : config.fonts.msBold, padding : 20, textAlign : 'center'}}>
                    Sei sicuro di voler eliminare il tuo account da Tribuzz?
                    </Text>
                </View>
                <View style={{marginVertical : 20}}>
                    <Text style={{fontFamily : config.fonts.msSBold, color : 'black', padding : 20, textAlign : 'center'}}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut 
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation 
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor 
                    in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis 
                    at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum facilisi.
                    </Text>
                </View>
                <View>
                    <Button
                    title="elimina account"
                    style={{alignItems : 'center'}}
                    titleStyle={{color : 'white'}}
                    buttonStyle={{backgroundColor : 'red', width : 60+'%', borderWidth : 0, paddingVertical : 15}}
                    onPress={()=>{}}
                    />
                </View>
            </View>
        )
    }
}