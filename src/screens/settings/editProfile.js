import React, {Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity, FlatList, ScrollView} from 'react-native';
import InputBox from '../../components/common/inputBox';
import Button from '../../components/common/button';
// import { nodeInternals } from 'stack-utils';
import HeaderImg from '../../components/common/labelImg';
// import { FlatList } from 'react-native-gesture-handler';


export default class EditProfile extends Component{
    constructor(props){
        super(props);
        this.state = ({});
    }
    render(){
        return(
            // <ScrollView style = {{flex : 1}}>
                <View style = {{flex : 1}}>
                    <HeaderImg/>
                <View>
                    <FlatList
                    data = {data}
                    renderItem={this.renderItem}
                    keyExtractor = {(item,index)=> index.toString()}
                    ListFooterComponent={this.footer}
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
                onPress = {()=>{}}
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