import React, {Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import config from '../../config/config';


export default class Credit extends Component{
    constructor(props){
        super(props);
        this.state = ({});
    }
    render(){
        return(
            <View style = {{flex : 1, backgroundColor : 'rgb(230,230,230)'}}>
                <Text style={{fontFamily : config.fonts.msSBold, padding : 30, textAlign : 'center'}}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                 magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                  nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                   iriure dolor in hendrerit in vulputate velit esse 
                  molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim
                   qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit
                    amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
                    erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                     aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
                     nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                 exerci tation ullamcorper suscipit lobortis nisl ut 
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate 
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    }
})