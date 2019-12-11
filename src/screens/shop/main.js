import {View, Text, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, FlatList, SafeAreaView, Image} from 'react-native';
import React, {Component} from 'react';
import TopList from '../../components/campaign/TopList';
import config from '../../config/config';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ENIcons from 'react-native-vector-icons/Entypo'
// import SafeAreaView from 'react-native-safe-area-view';
// import { FlatList } from 'react-native-gesture-handler';
const {icons,fonts,colors,assets} = config;

export default class Main extends Component{
    constructor(props){
        super(props);

    }
    render(){
        
        return(
            <SafeAreaView style={{flex : 1, backgroundColor : 'rgb(200,210,200)'}}>
                <TopList
                />
                <FlatList
                data={data}
                keyExtractor={(item,index)=> index.toString()}
                renderItem={this.renderItem}
                
                numColumns={2}
                />
            </SafeAreaView>
        )
    }
    renderItem = ({item,index})=>{
        const {navigation} = this.props;
        // console.log('nav',navigation)
        return(
            <TouchableOpacity 
            onPress={()=>{navigation.navigate('Detail')}}
            style={{margin : 1, flex : 1, backgroundColor : 'white'}}>
                <View>
                    <View>
                        <ImageBackground 
                        source={{uri : item.image}}
                        style={styles.img}
                        >
                            <View style={styles.absText}>
                                <Text style={styles.name}>{item.title} </Text>
                                <Text style={styles.name}>{item.subTitle} </Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{flexDirection : 'row'}}>
                    <View style={styles.iconCont}>
                        {/* <MCIcons name={icons.like} color="rgb(200,210,200)" size={20} /> */}
                        <Image style={{width : 30, height : 25}} source={assets.camp1} resizeMode="contain"  />
                        <Text style ={styles.numb}>{40} </Text>
                        <Text style={styles.iconTxt}>Likes</Text>
                    </View>
                    <View style={styles.iconCont}>
                        {/* <MCIcons name={icons.share} color="rgb(200,210,200)" size={20} /> */}
                        <Image style={{width : 25, height : 25}} source={assets.heart} resizeMode="contain"  />
                        <Text style ={styles.numb}>{10} </Text>
                        <Text style={styles.iconTxt}>Share</Text>
                    </View>
                    <View style={styles.iconCont}>
                        {/* <ENIcons name={icons.flag} color="rgb(200,210,200)" size={20} /> */}
                        <Image style={{width : 25, height : 25}} source={assets.cart} resizeMode="contain"  />
                        <Text style ={styles.numb}>{1} </Text>
                        <Text style={styles.iconTxt}>campagne</Text>
                    </View>
                    </View>
                </View>
                
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    img : {
        height : 100,
        backgroundColor : 'gray'
    },
    title : {

    },
    iconsCont : {
        flexDirection : 'row',
        // justifyContent : 'space-between'
    },
    iconTxt : {
        fontFamily : fonts.msSBold,
         fontSize : 9,
         color : 'black',
         textAlign : 'center'
    },
    numb : {
        fontFamily : fonts.msSBold,
        color : 'black',
        textAlign : 'center',
        fontSize : 10
    },
    iconCont : {
        backgroundColor : 'white',
        flex : 1, margin : 1,
        alignItems : 'center'
    },
    name : {
        fontFamily : fonts.msSBold,
        color : 'white'
    },
    absText : {
        flexDirection : 'row',
        justifyContent : 'space-around', 
        position : 'absolute', 
        width : 100+'%', 
        bottom : 0
    }
})

const data = [
    {
        title : 'Nike',
        subTitle : 'Sub Title',
        cart : 20,
        camp : 100,
        heart : 50,
        image : 'https://cdn.pixabay.com/photo/2018/05/30/15/31/rustic-3441673__340.jpg'
    },
    {
        title : 'Nike',
        subTitle : 'Sub Title',
        cart : 20,
        camp : 100,
        heart : 50,
        image : 'https://cdn.pixabay.com/photo/2017/01/08/21/11/wood-1963988__340.jpg'

    },
    {
        title : 'Nike',
        subTitle : 'Sub Title',
        cart : 20,
        camp : 100,
        heart : 50,
        image : 'https://cdn.pixabay.com/photo/2018/02/16/10/52/beverage-3157395__340.jpg'

    },
    {
        title : 'Nike',
        subTitle : 'Sub Title',
        cart : 20,
        camp : 100,
        heart : 50,
        image : 'https://cdn.pixabay.com/photo/2018/02/16/10/52/beverage-3157395__340.jpg'

    },
    {
        title : 'Nike',
        subTitle : 'Sub Title',
        cart : 20,
        camp : 100,
        heart : 50,
        image : 'https://cdn.pixabay.com/photo/2014/08/01/00/08/pier-407252__340.jpg'

    },
    {
        title : 'Nike',
        subTitle : 'Sub Title',
        cart : 20,
        camp : 100,
        heart : 50,
        image : 'https://cdn.pixabay.com/photo/2017/12/17/19/08/away-3024773__340.jpg'

    },
    {
        title : 'Nike',
        subTitle : 'Sub Title',
        cart : 20,
        camp : 100,
        heart : 50,
        image : 'https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220__340.jpg'

    },
    
]

// "https://cdn.pixabay.com/photo/2016/12/16/15/25/christmas-1911637__340.jpg",

// "https://cdn.pixabay.com/photo/2016/03/15/02/42/floor-1256804__340.jpg",

// "https://cdn.pixabay.com/photo/2017/12/17/19/08/away-3024773__340.jpg",

// "https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537__340.jpg",

// "https://cdn.pixabay.com/photo/2017/02/07/09/02/wood-2045380__340.jpg",

// "https://cdn.pixabay.com/photo/2014/08/01/00/08/pier-407252__340.jpg",

// "https://cdn.pixabay.com/photo/2014/12/15/17/16/pier-569314__340.jpg",

// "https://cdn.pixabay.com/photo/2018/02/16/10/52/beverage-3157395__340.jpg",

// "https://cdn.pixabay.com/photo/2017/01/08/21/11/wood-1963988__340.jpg",

// "https://cdn.pixabay.com/photo/2015/11/07/11/16/coffee-1030971__340.jpg",

// "https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220__340.jpg",

// "https://cdn.pixabay.com/photo/2015/03/11/21/50/shutters-669296__340.jpg",

// "https://cdn.pixabay.com/photo/2018/05/30/15/31/rustic-3441673__340.jpg",

// "https://cdn.pixabay.com/photo/2017/02/07/09/02/wood-2045379__340.jpg",

// "https://cdn.pixabay.com/photo/2013/02/21/19/12/lumber-84678__340.jpg",

// "https://cdn.pixabay.com/photo/2019/04/14/14/32/pier-4126901__340.jpg",

// "https://cdn.pixabay.com/photo/2016/07/30/20/52/vintage-1557993__340.jpg",

// "https://cdn.pixabay.com/photo/2018/03/09/22/19/wood-3212803__340.jpg",

// "https://cdn.pixabay.com/photo/2017/11/10/22/44/christmas-2937873__340.jpg",

// "https://cdn.pixabay.com/photo/2016/05/01/17/58/dock-1365387__340.jpg",

// "https://cdn.pixabay.com/photo/2015/01/07/16/37/wood-591631__340.jpg",

// "https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970__340.jpg",

// "https://cdn.pixabay.com/photo/2014/11/21/17/38/ruin-540835__340.jpg",

// "https://cdn.pixabay.com/photo/2014/05/03/01/01/leaves-336694__340.jpg",

// "https://cdn.pixabay.com/photo/2017/04/27/08/18/arrangement-2264812__340.jpg",

// "https://cdn.pixabay.com/photo/2018/02/08/10/22/desk-3139127__340.jpg",

// "https://cdn.pixabay.com/photo/2017/05/12/08/30/typewriter-2306479__340.jpg",