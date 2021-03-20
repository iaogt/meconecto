import React from 'react';
import { render } from 'react-dom';
import { ImageBackground, ScrollView, StyleSheet, Button, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Video from 'react-native-video';

const data = {
        id:"a",
        title:'Sexting',
        img:"https://meconectosinclavos.awelp.com/wp-content/uploads/2020/12/video-1-sexting.jpg"
};

export default class Detalle extends React.Component{

    constructor(props){
        super(props);
        this.state = {play:true};
        this.playVideo = this.playVideo.bind(this);
        this.refPlayer = this.refPlayer.bind(this);
        this.player = null;
        this.avanza = props.avanza;
    }

    refPlayer(ref){
        this.player = ref;
    }

    playVideo(){
        this.setState({play:true})
        //this.player.presentFullscreenPlayer();
    }
    
    render(){
        let play=this.state.play;
        return (
            <ScrollView>
                <View style={styles.detalleitem1}>
                    <View style={styles.barraSub}>
                        <Text style={styles.txtTitulo}>¿Por qué el sexting es un peligro?</Text>
                    </View>
                    { (play) ? 
                        <Video 
                        source={{uri:'https://meconectosinclavos.awelp.com/wp-content/uploads/2020/11/video-1-sexting.mp4'}}
                        style={{width:'100%',height:200}}
                        controls={true}
                        ref={this.refPlayer}
                        onEnd={this.avanza}
                        fullscreen={true}
                        fullscreenAutorotate={true}
                        fullscreenOrientation="landscape"
                        resizeMode="cover"
                        poster="https://meconectosinclavos.awelp.com/wp-content/uploads/2020/12/video-1-sexting.jpg"
                        ></Video>
                    : 
                        <ImageBackground source={{uri:"https://meconectosinclavos.awelp.com/wp-content/uploads/2020/12/video-1-sexting.jpg"}} style={styles.detalleimg1}>
                        <View style={styles.buttonPlay}>
                            <TouchableOpacity onPress={this.playVideo}>
                                <Image source={require('../assets/thumbs/play-icon-white-png-4.jpg')} style={styles.imgplay}/>
                            </TouchableOpacity>
                        </View>
                        </ImageBackground> 
                    }
                    <View style={styles.barraSubtitle}>
                        <Text style={styles.subtitle}>¿Cómo lo contarías?</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    detalleimg1:{
        flex:1,
        resizeMode:"cover",
        justifyContent:"flex-end"    
    },
    detalleitem1:{
        flexDirection:"column"  
    },
    buttonPlay:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        height:200
    },
    imgplay:{
        width:100,
        height:100
    },
    txtTitulo:{
        color:"#fff",
        fontSize:18,
        marginLeft:10,
        paddingTop:5,
        paddingBottom:5,
    },
    barraSub:{
        backgroundColor:"#86509b",
    },
    barraSubtitle:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1
    },
    subtitle:{
        color:"#2064ac",
        fontSize:18
    }
})