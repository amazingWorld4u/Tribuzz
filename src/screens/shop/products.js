import {View, Text, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, FlatList, Image} from 'react-native';
import React, {Component} from 'react';
import TopList from '../../components/campaign/TopList';
import config from '../../config/config';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ENIcons from 'react-native-vector-icons/Entypo'


export default class Products extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
            <FlatList
            data={data}
            renderItem={this.renderItem}
            keyExtractor={(item,index)=> index.toString()}
            numColumns={3}
            listKey={'products'}
            />
            </View>
            
        )
    }
    renderItem = ({item,index}) =>{
        return(
            <View style={{flex : 1, margin : 2}}>
                <Image
                source={{uri : item}}
                style={{height : 150, backgroundColor : 'gray'}}
                />
            </View>
        )
    }
}
//https://cdn.pixabay.com/photo/2017/01/08/21/11/wood-1963988__340.jpg",

// "https://cdn.pixabay.com/photo/2015/11/07/11/16/coffee-1030971__340.jpg",

// "https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220__340.jpg",

// "https://cdn.pixabay.com/photo/2015/03/11/21/50/shutters-669296__340.jpg",

// "https://cdn.pixabay.com/photo/2018/05/30/15/31/rustic-3441673__340.jpg",

// "https://cdn.pixabay.com/photo/2017/02/07/09/02/wood-2045379__340.jpg",

// "https://cdn.pixabay.com/photo/2013/02/21/19/12/lumber-84678__340.jpg",

// "https://cdn.pixabay.com/photo/2019/04/14/14/32/pier-4126901__340.jpg",

// "https://cdn.pixabay.com/photo/2016/07/30/20/52/vintage-1557993__340.jpg",

const data = [
    "https://cdn.pixabay.com/photo/2015/11/07/11/16/coffee-1030971__340.jpg",
    "https://cdn.pixabay.com/photo/2013/02/21/19/12/lumber-84678__340.jpg",
    "https://cdn.pixabay.com/photo/2018/05/30/15/31/rustic-3441673__340.jpg",
    "https://cdn.pixabay.com/photo/2013/02/21/19/12/lumber-84678__340.jpg",
    "https://cdn.pixabay.com/photo/2018/05/30/15/31/rustic-3441673__340.jpg",
    "https://cdn.pixabay.com/photo/2013/02/21/19/12/lumber-84678__340.jpg",
    "https://cdn.pixabay.com/photo/2019/04/14/14/32/pier-4126901__340.jpg",
    "https://cdn.pixabay.com/photo/2015/11/07/11/16/coffee-1030971__340.jpg"
];