import React, {Component} from 'react';
import {Text, View, StyleSheet,ScrollView } from 'react-native';
import config from '../../config/config';
import TopList from '../../components/campaign/TopList';
import CampaignList from '../../components/campaign/CampaignList';
const {fonts, icons} = config;


export default class Locale extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <ScrollView style = {{flex : 1}}>
                <TopList
                style = {{marginTop : 5}}
                />
                <CampaignList {...this.props} />
            </ScrollView>
        )
    }
}