import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ImageBackground, StyleSheet, Image, FlatList} from 'react-native';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import config from '../config/config';
const {fonts, icons,colors, assets} = config;


export default class Jungle extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        let data=[
            "https://cdn.pixabay.com/photo/2014/12/15/17/16/pier-569314__340.jpg",
            "https://cdn.pixabay.com/photo/2016/03/15/02/42/floor-1256804__340.jpg",
            "https://cdn.pixabay.com/photo/2015/03/11/21/50/shutters-669296__340.jpg"
        ];
        return(
            <View style={{flex : 1}}>
                <FlatList
                data={data}
                renderItem={this.renderItem}
                keyExtractor={(item,index)=> index.toString()}
                />
                
            </View>
        )
    }
    renderItem = ({item,index}) =>{
        return(
            <View style={{marginVertical : 10, marginHorizontal : 5}}>
                <View style={{flexDirection : 'row', alignItems : 'center'}}>
                    <View style={{flex : 0.2, alignItems : 'center'}}>
                        <View style={{borderRadius : 100, overflow : 'hidden'}}>
                        <Image
                        style={styles.img}
                        source={{uri : 'https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220__340.jpg'}}
                        resizeMode="cover"
                        />
                        </View>
                    </View>
                    <View style={{flex : 0.7}}>
                        <Text style={styles.nameTxt}>Some Text</Text>
                        <Text style={styles.subTitle}>Sub title</Text>
                    </View>
                    <View style={{flex : 0.1}}>
                        <MCIcons name={icons.accountPlus} color="green" size={25} />
                    </View>
                </View>
                <View>
                    <ImageBackground 
                    style={styles.image}
                    source={{uri : item}}
                    >
                        <View style=  {{flex : 1}}>
                        <View>
                            <Text style={styles.imgTitle}>Text will appear</Text>
                            <Text style={styles.imgSubTitle}>Title</Text>
                        </View>
                        <View 
                        style={{position : 'absolute', bottom : 5, alignSelf : 'flex-end', flexDirection : 'row'}}
                        >
                            <MCIcons 
                            name={icons.like} 
                            color="white" 
                            size={20} 
                            />
                            <Image 
                            source={assets.share} 
                            style={{height : 20, width : 20, marginHorizontal : 5}} 
                            resizeMode="contain" 
                            />
                        </View>
                        </View>
                    </ImageBackground>
                </View>
                <View>
                    <View 
                    style= {{flexDirection : 'row', marginVertical : 5, flexDirection : 'row', justifyContent : 'space-between'}}
                    >
                        <Text style={styles.hashTag}>Some Hash Tag here</Text>
                        <Text style={{fontFamily : fonts.msMedium}}>1 ora fa</Text>
                    </View>
                    <View style={{marginVertical : 5}}>
                        <Text style={styles.subTitle}>Ciriaca Zito: Ciao</Text>
                        <Text style={styles.subTitle}>Maura Pinto: Bravissime!!!</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    img : {
        width : 60,
        height : 60,
        backgroundColor : 'green', 
        // borderRadius : 100
    },
    imgTitle : {
        fontFamily: fonts.msBold,
        color : 'white'
    },
    imgSubTitle : {
        fontFamily : fonts.msSBold,
        color : 'green'
    },
    subTitle : {
        color : 'gray', 
        fontFamily : fonts.msMedium
    },
    nameTxt : {
        color : 'black',
        fontFamily : fonts.msBold
    },
    hashTag : {
        fontFamily : fonts.msSBold,
        color : 'gray'
    },
    image : {
        width : 100+'%',
        height : 300,
        backgroundColor : 'gray'
    }

})