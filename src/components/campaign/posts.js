import config from '../../config/config';
import React, {Component} from 'react';
import { FlatList, View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const {icons, fonts} = config;
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
        const {title}=this.props;
        return(
            <View style={{flex : 1}}>
                <View >
                    <Text style={styles.text}>{title}</Text>
                </View>

                <View style={{flexDirection : 'row', justifyContent : 'flex-end', position : 'absolute', bottom : 0, width : 100+'%'}}>
                    <TouchableOpacity style={{marginHorizontal : 3}} >
                        <View>
                            <MCIcons name="thumb-up-outline" size={20} color={"green"} />
                            <Text style={styles.numb}>123</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal : 3}}>
                        <View>
                            <MCIcons name="share" size={20} color={"green"} />
                            <Text style={styles.numb}>12</Text>
                        </View>
                    </TouchableOpacity>
                </View>
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
                        <Items {...this.props.data[0]} />
                    </ImageBackground>
                </TouchableOpacity>
                <View style = {{flex : 0.3}}>
                    <TouchableOpacity style = {{marginBottom : 1}}>
                        <View>
                            <ImageBackground
                            source={{uri : data[1].image}}
                            style={styles.img3}
                            >
                            <Items {...this.props.data[1]} />
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  style = {{marginTop : 1}}>
                        <View>
                            <ImageBackground
                            source={{uri : data[2].image}}
                            style={styles.img3}
                            >
                            <Items {...this.props.data[2]} />
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
                        <Items {...this.props.data[0]} />
                    </ImageBackground>
                </View>
                <View style = {{flex : 1, margin : 1}}>
                    <ImageBackground
                    source={{uri : data[0].image}}
                    style = {styles.img2}
                    >
                        <Items {...this.props.data[1]} />
                    </ImageBackground>
                </View>
                <View style = {{flex : 1, margin : 1}}>
                    <ImageBackground
                    source={{uri : data[0].image}}
                    style = {styles.img2}

                    >
                    <Items {...this.props.data[2]} />
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
                            <Items {...this.props.data[0]} />

                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{marginTop : 1}}>
                        <View>
                            <ImageBackground
                            source={{uri : data[1].image}}
                            style={styles.img3}
                            >
                            <Items {...this.props.data[1]} />

                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {{flex : 0.7, margin : 1}}>
                    <ImageBackground
                    source={{uri : data[2].image}}
                    style={styles.img1}
                    >
                            <Items {...this.props.data[2]} />
                    </ImageBackground>
                </View>
            </View>
        )
    }
}

export default class Posts extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        const {navigateTo, navigation} = this.props;
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
                                <TouchableOpacity  onPress={()=>{navigation.navigate(navigateTo), alert(navigateTo)}}
                                style = {{margin : 1}}>
                                    <View>
                                        <ImageBackground
                                        source={{uri : item.data[0].image}}
                                        style={{height : 300}}
                                        >
                                        <Items {...item.data[0]} />

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
                                        <Items {...item.data[0]} />
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
// [1,3,3,3,1,2];
const dat = [
    {
        title : 'first',
        data : [
            {
                image : 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
                title : 'Space'
            }
        ]
    },
    {
        title : 'second',
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
        title : 'second',
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
        title : 'second',
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
    }
]