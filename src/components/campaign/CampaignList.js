import config from '../../config/config';
import React, {Component} from 'react';
import { FlatList, View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {icons, fonts, assets} = config;
const styles = StyleSheet.create({
    img1 : {
        height : 200,
    },
    img2 : {
        height : 100
    },
    img3 : {
        height : 99
    },
    text : {
        fontFamily : fonts.msBold,
        color : 'white'
    },
    numb : {
        fontFamily : fonts.msSBold,
        color : 'white', fontSize : 11,
        textAlign : 'center'
    }
})
class Items extends Component{
    render(){
        const {title, container}=this.props;
        let isSmall = container=="small";
        return(
            <View style={{flex : 1}}>
                <View >
                    <Text style={styles.text}>{title}</Text>
                </View>
                {
                isSmall
                ?
                <View style={{flexDirection : 'row', justifyContent : 'space-between', position : 'absolute', bottom : 0, width : 100+'%', alignItems : 'flex-end'}}>
                    <Text style={styles.numb}>
                        31 {"\n"} days
                    </Text>
                    <TouchableOpacity >
                        <View>
                            <Image source={assets.coin} style={{width : 15, height : 15}} />
                            {/* <MCIcons name="thumb-up-outline" size={20} color={"green"} /> */}
                            <Text style={styles.numb}>123</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View>
                            {/* <MCIcons name="share" size={20} color={"green"} /> */}
                            <Image source={assets.location} style={{width : 10, height : 15}} resizeMode="contain" />
                            <Text style={styles.numb}>12</Text>
                        </View> 
                    </TouchableOpacity>
                </View>
                :
                <View style={{flexDirection : 'row', justifyContent : 'flex-end', position : 'absolute', bottom : 0, width : 100+'%', alignItems : 'flex-end'}}>
                    <Text style={[styles.numb,{flex : 1, textAlign : 'left',marginLeft : 5}]}>
                        31 {"\n"}days
                    </Text>
                    <View style={{flexDirection : 'row'}}>
                    <TouchableOpacity style={{marginHorizontal : 3}} >
                        <View>
                            <Image source={assets.coin} style={{width : 20, height : 20}} />
                            {/* <MCIcons name="thumb-up-outline" size={20} color={"green"} /> */}
                            <Text style={styles.numb}>123</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal : 3}}>
                        <View>
                            {/* <MCIcons name="share" size={20} color={"green"} /> */}
                            <Image source={assets.location} style={{width : 15, height : 20}} resizeMode="contain" />
                            <Text style={styles.numb}>12</Text>
                        </View> 
                    </TouchableOpacity>
                    </View>
                </View>
                }
            </View>
            
        )
    }
}

class List1 extends Component{
    render(){
        const {data} = this.props;
        return(
            <View style = {{flexDirection : 'row', alignItems:'center'}}>
                <TouchableOpacity style = {{flex : 0.7, margin : 1}}>
                    <ImageBackground
                    source={{uri : data[0].image}}
                    style ={styles.img1}
                    >
                        <Items {...this.props.data[0]} container={"big"} />
                    </ImageBackground>
                </TouchableOpacity>
                <View style = {{flex : 0.3}}>
                    <TouchableOpacity style = {{marginBottom : 1}}>
                        <View>
                            <ImageBackground
                            source={{uri : data[1].image}}
                            style={styles.img3}
                            >
                            <Items {...this.props.data[1]} container={"small"} />
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  style = {{marginTop : 1}}>
                        <View>
                            <ImageBackground
                            source={{uri : data[2].image}}
                            style={styles.img3}
                            >
                            <Items {...this.props.data[2]} container={"small"} />
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
class List2 extends Component{
    render(){
        const {data} = this.props;
        return(
            <View style = {{flexDirection : 'row'}}>
                <View style = {{flex : 1, margin : 1}}>
                    <ImageBackground
                    source={{uri : data[0].image}}
                    style = {styles.img2}
                    >
                        <Items {...this.props.data[0]} container={"small"} />
                    </ImageBackground>
                </View>
                <View style = {{flex : 1, margin : 1}}>
                    <ImageBackground
                    source={{uri : data[0].image}}
                    style = {styles.img2}
                    >
                        <Items {...this.props.data[1]} container={"small"} />
                    </ImageBackground>
                </View>
                <View style = {{flex : 1, margin : 1}}>
                    <ImageBackground
                    source={{uri : data[0].image}}
                    style = {styles.img2}

                    >
                    <Items {...this.props.data[2]} container={"small"} />
                    </ImageBackground>
                </View>
            </View>
        )
    }
}

class List3 extends Component{
    render(){
        const {data} = this.props;
        return(
            <View style = {{flexDirection : 'row', alignItems:'center'}}>
                <View style = {{flex : 0.3,margin : 1,justifyContent : 'center'}}>
                    <TouchableOpacity style = {{marginBottom : 1}}>
                        <View>
                            <ImageBackground
                            source={{uri : data[0].image}}
                            style={styles.img3}
                            >
                            <Items {...this.props.data[0]} container={"small"} />

                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{marginTop : 1}}>
                        <View>
                            <ImageBackground
                            source={{uri : data[1].image}}
                            style={styles.img3}
                            >
                            <Items {...this.props.data[1]} container={"small"} />

                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {{flex : 0.7, margin : 1}}>
                    <ImageBackground
                    source={{uri : data[2].image}}
                    style={styles.img1}
                    >
                            <Items {...this.props.data[2]} container={"big"} />
                    </ImageBackground>
                </View>
            </View>
        )
    }
}
export default class CampaignList extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        const data = [

            {
                image : 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
                title : 'Food'
            },
            {
                image : 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
                title : 'Sports'
            },
            {
                image : 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
                title : 'Music'
            },
            {
                image : 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
                title : 'Photo'
            },
            {
                image : 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
                title : 'Video'
            },
            {
                image : 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
                title : 'Nature'
            },
            {
                image : 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
                title : 'Space'
            },
            
        ];
        return(
            <View>
                {/* <Text>jhfdjhhj</Text> */}
                <ScrollView>
                    {dat.map((item,index)=>{
                        if(index==0){
                            return(
                                <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('CampDetails')}}
                                style = {{margin : 1}}>
                                    <View>
                                        <ImageBackground
                                        source={{uri : item.data[0].image}}
                                        style={{height : 300}}
                                        >
                                        <Items {...item.data[0]} container="big" />

                                        </ImageBackground>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                        else if(index==1){
                            return(
                                <View style = {{margin : 2}}>
                                <List1 data={item.data} />
                                </View>
                            )
                        }
                        else if(index%3==0){
                            return(
                                <View style = {{margin : 2}}>
                                <List2 data={item.data} />
                                </View>
                            )
                        }
                        else if(index%4==0){
                            return(
                                <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('CampDetails')}}
                                style = {{margin : 1}}>
                                    <View>
                                        <ImageBackground
                                        source={{uri : item.data[0].image}}
                                        style={{height : 300}}
                                        >
                                        <Items {...item.data[0]} container="big" />

                                        </ImageBackground>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                        else{
                            return(
                                <View style = {{margin : 2}}>
                                <List3 data={item.data} />
                                </View>
                                // <Text>hi</Text>
                            )
                        }
                    })}
                </ScrollView>
                {/* <FlatList
                horizontal
                data={data}
                renderItem={this.renderItem}
                numColumns={2}
                keyExtractor={(item,index)=> index.toString()}
                /> */}
            </View>
        )
    }
    renderItem = ({item,index}) =>{
        return(
            <View>
                <View>
                    <Image
                    source={{uri : item.image}}
                    style = {{height : 70, width : 30}}
                    />
                </View>
            </View>
        )
    }
}
// // [1,3,3,3,1,2];
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
const dat = [
    {
        title : 'first',
        data : [
            {
                image : 'https://cdn.pixabay.com/photo/2017/05/12/08/30/typewriter-2306479__340.jpg',
                title : 'Space'
            }
        ]
    },
    {
        title : 'second',
        data : [
            {
                image : 'https://cdn.pixabay.com/photo/2018/02/08/10/22/desk-3139127__340.jpg',
                title : 'Space'
            },
            {
                image : 'https://cdn.pixabay.com/photo/2017/04/27/08/18/arrangement-2264812__340.jpg',
                title : 'Space'
            },
            {
                image : 'https://cdn.pixabay.com/photo/2014/05/03/01/01/leaves-336694__340.jpg',
                title : 'Space'
            },
        ]
    },
    {
        title : 'third',
        data : [
            {
                image : 'https://cdn.pixabay.com/photo/2014/11/21/17/38/ruin-540835__340.jpg',
                title : 'Space'
            },
            {
                image : 'https://cdn.pixabay.com/photo/2017/11/10/22/44/christmas-2937873__340.jpg',
                title : 'Space'
            },
            {
                image : 'https://cdn.pixabay.com/photo/2014/12/15/17/16/pier-569314__340.jpg',
                title : 'Space'
            },
        ]
    },
    {
        title : 'fourth',
        data : [
            {
                image : 'https://cdn.pixabay.com/photo/2016/07/30/20/52/vintage-1557993__340.jpg',
                title : 'Space'
            },
            {
                image : 'https://cdn.pixabay.com/photo/2017/11/10/22/44/christmas-2937873__340.jpg',
                title : 'Space'
            },
            {
                image : 'https://cdn.pixabay.com/photo/2014/08/01/00/08/pier-407252__340.jpg',
                title : 'Space'
            },
        ]
    },
    // {
    //     title : 'first',
    //     data : [
    //         {
    //             image : 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
    //             title : 'Space'
    //         }
    //     ]
    // },
    {
        title : 'second',
        data : [
            {
                image : 'https://cdn.pixabay.com/photo/2018/02/08/10/22/desk-3139127__340.jpg',
                title : 'Space'
            },
            {
                image : 'https://cdn.pixabay.com/photo/2017/04/27/08/18/arrangement-2264812__340.jpg',
                title : 'Space'
            },
            {
                image : 'https://cdn.pixabay.com/photo/2014/05/03/01/01/leaves-336694__340.jpg',
                title : 'Space'
            }
        ]
    },
    {
        title : 'third',
        data : [
            {
                image : 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
                title : 'Space'
            },
            {
                image : 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
                title : 'Space'
            },
            {
                image : 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
                title : 'Space'
            },
        ]
    },
    {
        title : 'fourth',
        data : [
            {
                image : "https://cdn.pixabay.com/photo/2017/12/17/19/08/away-3024773__340.jpg",
                title : 'Space'
            },
            {
                image : 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
                title : 'Space'
            },
            {
                image : 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
                title : 'Space'
            },
        ]
    },
    {
        title : 'second',
        data : [
            {
                image : 'https://cdn.pixabay.com/photo/2018/02/08/10/22/desk-3139127__340.jpg',
                title : 'Space'
            },
            {
                image : 'https://cdn.pixabay.com/photo/2017/04/27/08/18/arrangement-2264812__340.jpg',
                title : 'Space'
            },
            {
                image : 'https://cdn.pixabay.com/photo/2014/05/03/01/01/leaves-336694__340.jpg',
                title : 'Space'
            },
        ]
    }
]