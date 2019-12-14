import React, {Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity, FlatList, ScrollView} from 'react-native';
import InputBox from '../../components/common/inputBox';
import Button from '../../components/common/button';
// import { nodeInternals } from 'stack-utils';
import HeaderImg from '../../components/common/labelImg';
// import { FlatList } from 'react-native-gesture-handler';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import config from '../../config/config';

export default class EditProfile extends Component{
    constructor(props){
        super(props);
        this.state = ({});
    }
    header = ()=>{
        return(
            <View style={{alignItems : 'center',paddingVertical : 20, backgroundColor : 'white'}}>
                <View style={{width : 80, height : 80, borderRadius : 100, backgroundColor : 'rgb(230,230,230)', overflow : 'hidden'}}>
                    <View style={{flex :1}}>

                    </View>
                    <View style={{flex : 1, backgroundColor : config.colors.blue1, alignItems : 'center', justifyContent : 'center'}}>
                    <MCIcons name="camera" color="white" size={20}
                    />
                    </View>
                </View>
            </View>
        )
    }
    render(){
        return(
            // <ScrollView style = {{flex : 1}}>
                <View style = {{flex : 1}}>
                    
                <View>
                    <FlatList
                    data = {data}
                    contentContainerStyle={{backgroundColor : 'rgb(230,230,230)'}}
                    renderItem={this.renderItem}
                    keyExtractor = {(item,index)=> index.toString()}
                    ListFooterComponent={this.footer}
                    ListHeaderComponent = {this.header}
                    ListFooterComponentStyle = {{marginVertical : 10}}
                    />
                </View>
                
                </View>
            // </ScrollView>
        )
    }
    footer = ()=>{
        return(
            <View style = {{flexDirection : 'row', justifyContent : 'space-around'}}>
                <Button
                buttonStyle = {{width : null}}
                title = "salva modifiche"
                onPress = {()=>{}}
                // buttonStyle = {styles.saveBtn}
                />
                <Button
                buttonStyle = {{width : null, borderColor : 'red'}}
                title = "elimina account"
                titleStyle={{color : 'red'}}
                onPress = {()=>{this.props.navigation.navigate('Eliminate')}}
                // buttonStyle = {styles.btnTerminate}
                />
            </View>
        )
    }
    renderItem = ({item,index}) =>{
        return(
            <View style = {{marginHorizontal : 20, marginVertical : 10}}>
                <InputBox
                onChangeText = {(value)=>{alert('value')}}
                label = {item.label}
                labelStyle = {styles.labelStyle}
                placeholder = {item.placeholder}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    labelStyle  : {
        fontSize : 11,
    },
    saveBtn : {

    },
    btnTerminate : {
        borderColor : 'red'
    }
})

let data = [
    {
        label : 'nome',
        placeholder : 'Nome'
    },
    {
        label : 'cognome',
        placeholder : 'Nome'
    },
    {
        label : 'email',
        placeholder : 'nomecognome@gmail.it'
    },
    {
        label : 'cellulare',
        placeholder : '333 00 00 001'
    },
    {
        label : "data di nascita",
        placeholder : 'xx/xx/xxxx'
    },
    {
        label : 'città di residenza',
        placeholder : 'Città'
    },
    {
        label : 'descrizione',
        placeholder : 'Su di me'
    },
    
]