import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image, StyleSheet} from 'react-native';


import config from '../../config/config';
const {icons, fonts} = config;
export default class TopList extends Component{
    constructor(props){
        super(props);
        this.state = ({
            focused : 0,
        });
    }
    render(){
        const data = [
            {
                image : 'https://cdn.pixabay.com/photo/2017/02/07/09/02/wood-2045379__340.jpg',
                title : 'Food'
            },
            {
                image : 'https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220__340.jpg',
                title : 'Sports'
            },
            {
                image : 'https://cdn.pixabay.com/photo/2017/01/08/21/11/wood-1963988__340.jpg',
                title : 'Music'
            },
            {
                image : 'https://cdn.pixabay.com/photo/2014/08/01/00/08/pier-407252__340.jpg',
                title : 'Photo'
            },
            {
                image : 'https://cdn.pixabay.com/photo/2016/03/15/02/42/floor-1256804__340.jpg',
                title : 'Video'
            },
            {
                image : 'https://cdn.pixabay.com/photo/2017/12/17/19/08/away-3024773__340.jpg',
                title : 'Nature'
            },
            {
                image : 'https://cdn.pixabay.com/photo/2019/04/14/14/32/pier-4126901__340.jpg',
                title : 'Space'
            },
            
        ];
        return(
            <View style = {this.props.style}>
                <FlatList
                horizontal
                data={data}
                renderItem={this.renderItem}
                keyExtractor={(item,index)=> index.toString()}
                />
            </View>
        )
    }
    action = (index)=>{
        this.setState({focused : index})
    }
    renderItem = ({item,index}) => {
        return(
            <TouchableOpacity style={styles.itemContainer} onPress={()=>{this.action(index)}} >
                <View>
                    <View>
                    <Image
                    source={{uri : item.image}}
                    style={styles.img}
                    />
                    <Text style={styles.title} >{item.title} </Text>
                    {
                        this.state.focused==index?

                        <Text 
                    style={{position : 'absolute',alignSelf : 'center', width : 12, height : 2, backgroundColor : 'white',borderRadius : 5, bottom : 5}}>

                    </Text>
                    :
                    null
                    }
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    img : {
        height : 70,
        width : 70
    },
    itemContainer : {
        margin : 2,
        borderRadius : 5,
        overflow : 'hidden'
    },
    title : {
        fontFamily : fonts.msSBold,
        color : 'black',
        position : 'absolute', bottom : 7,
        width : 100 + '%',
        color : 'white',
        textAlign : 'center'
    }
})