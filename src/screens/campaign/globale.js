import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import TopList from '../../components/campaign/TopList';
import CampaignList from '../../components/campaign/CampaignList';


export default class Second extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <ScrollView style = {{flex : 1}}>
                <TopList/>
                {/* <Text>Globale Screen</Text> */}
                <CampaignList {...this.props} />

            </ScrollView>
        )
    }
}