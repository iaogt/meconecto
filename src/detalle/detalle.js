import React,{ useLayoutEffect,useState } from 'react';
import { render } from 'react-dom';
import { ImageBackground, ScrollView, StyleSheet, Button, View, Text, Image, Linking,Modal,TextInput, DrawerLayoutAndroidComponent } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector,useDispatch} from 'react-redux';
import ActivityFactory from '../entities/activityFactory';
import MessageFactory from '../entities/messageFactory';
import Clipboard from '@react-native-clipboard/clipboard';

import {
    SCLAlert,
    SCLAlertButton
  } from 'react-native-scl-alert'

export default function Detalle(props){
    const [play,setPlay] = useState(false);
    const [userdata,setData] = useState(null);

    const sel1 = state => state.activities;
    const selected = useSelector(sel1);
    const sel2 = state => state.users;
    const iuid = useSelector(sel2);
    const [compite,setCompite] = useState(false);
    const [comparte,setComparte] = useState(true);
    const [invita,setInvita]=useState(true);
    const [escribe,setEscribe]=useState(true);  
    const dispatch = useDispatch();

    const [sharing,showSharing] = useState(false);
    const [subtitle,setSub] = useState("")
    const [ellink,setLink] = useState("")
    const [eltitle,setTitle] = useState("")
    const [videopaused,setPause] = useState(false);
    const [botonesCompartir,setCompartir] = useState(false);

    const activities = ActivityFactory.getActivities();

    let player = null;

    useLayoutEffect(()=>{
        console.log(props);
        let dataCompetencia = iuid.data.competencias[props.comp];
        console.log(dataCompetencia);
        if(dataCompetencia!=undefined){
            dispatch({type:"activity/competencia",payload:dataCompetencia})
            if(dataCompetencia['logros']!=undefined){
                if(dataCompetencia['logros']['compite']==1){
                    setComparte(true);
                    setCompite(true);
                }
                if(dataCompetencia['logros']['comparte']==1){
                    setComparte(true);
                    setInvita(true);
                }
            }
        }
        //setPlay(true);
    },[])

    const refPlayer = (ref)=>{
        player = ref;
    }

    const playVideo = ()=>{
        setPlay(true);
        //this.player.presentFullscreenPlayer();
    }

    const avanza = ()=>{
        props.avanza()
    }

    const acciona=(data)=>{
        switch(data){
            case "compite":{
                setPause(true)
                props.avanza();
                break;
            }
            case "invita":{
                if(invita){
                    setTitle("Invita a tus amigos")
                    MessageFactory.createAppLink()
                    .then(p=>{
                        showSharing(true);
                        setLink(p);
                    })
                    .catch(e=>{
                        console.log("e");
                    })
                }
                break;
            }
            case "comparte":{
                if(comparte){
                    let tt = ActivityFactory.getSharetitle(selected.selected);
                    setTitle("Copia este link en tus redes sociales")
                    MessageFactory.createCompLink({sharetitle:tt})
                    .then(p=>{
                        showSharing(true);
                        setLink(p);
                    })
                    .catch(e=>{
                        console.log("e");
                    })
                }
                break;
            }
            case "escribe":{
                const url = "https://wa.link/xepyys";
                Linking.canOpenURL(url)
                .then(supported=>{  
                    if (supported) {
                        Linking.openURL(url)
                        .then(r=>{
                            console.log("se abrio");
                        })
                        .catch(e=>{
                            console.log("no se pudo abrir");
                        })
                    } else {
                        Alert.alert(`Don't know how to open this URL: ${url}`);
                    }      
                })
                .catch(e=>{
                    console.log("error:");
                    console.log(e);
                })
                break;
            }
        }
    }

    const cierra3 = (()=>{

    })

    const handleClose3 = (()=>{

    })


    const acciona2  = ((medio) => {
        Linking.canOpenURL('https://wa.link/xepyys')
        .then(supported=>{  
            if (supported) {
                Linking.openURL('https://wa.link/xepyys')
                .then(r=>{
                    console.log("se abrio");
                })
                .catch(e=>{
                    console.log("no se pudo abrir");
                })
            } else {
                Alert.alert(`Don't know how to open this URL: ${url}`);
            }      
        })
        .catch(e=>{
            console.log("error:");
            console.log(e);
        })
    })
    
    return (
        <ScrollView>
            <View style={styles.detalleitem1}>
                <View style={styles.barraSub}>
                    <Text style={styles.txtTitulo}>{ActivityFactory.getSubtitle(selected.selected)}</Text>
                </View>
                { (play) ? 
                    <Video 
                    paused={videopaused}
                    source={{uri:ActivityFactory.getVideo(selected.selected)}}
                    style={{width:'100%',height:200}}
                    controls={true}
                    ref={refPlayer}
                    onEnd={avanza}
                    fullscreen={true}
                    fullscreenAutorotate={true}
                    fullscreenOrientation="landscape"
                    resizeMode="cover"
                    poster={ActivityFactory.getPoster(selected.selected)}
                    ></Video>
                : 
                    <ImageBackground source={{uri:ActivityFactory.getPoster(selected.selected)}} style={styles.detalleimg1}>
                    <View style={styles.buttonPlay}>
                        <TouchableOpacity onPress={playVideo}>
                            <Image source={require('../assets/thumbs/play-icon-white-png-4.jpg')} style={styles.imgplay}/>
                        </TouchableOpacity>
                    </View>
                    </ImageBackground> 
                }
                <View style={styles.barraSubtitle}>
                    <Text style={styles.subtitle}>Hazlo diferente</Text>
                </View>
                <View style={styles.grid1}>
                    <View style={styles.activity}>
                        <TouchableOpacity onPress={()=>acciona('compite')} style={styles.activity}>
                            <Image source={require('../assets/icon_compite.png')} style={styles.imgIcon}/>
                            <Text style={styles.btnAct}>Compite</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.activity}>
                        <TouchableOpacity onPress={()=>acciona('comparte')} style={styles.activity}>
                            <Image source={require('../assets/icon_share.png')} style={styles.imgIcon}/>  
                            <Text style={styles.btnAct}>Comparte</Text> 
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.grid1}>
                    <View style={styles.activity}>
                        <TouchableOpacity onPress={()=>acciona('invita')} style={styles.activity}>
                            <Image source={require('../assets/icon_invita.png')} style={styles.imgIcon}/>
                            <Text style={styles.btnAct}>Invita</Text> 
                        </TouchableOpacity>
                    </View>
                    <View style={styles.activity}>
                        <TouchableOpacity onPress={()=>acciona('escribe')} style={styles.activity}>
                            <Image source={require('../assets/icon_escribe.png')} style={styles.imgIcon}/>
                            <Text style={styles.btnAct}>¿Necesitas ayuda?</Text> 
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <SCLAlert
                theme="info"
                show={sharing}
                title="Comparte"
                subtitle={eltitle}
                onRequestClose={cierra3}>
                <View>
                    <TextInput style={styles.linkComparte} value={ellink}></TextInput>
                </View>
                <SCLAlertButton theme="info" onPress={()=>{ Clipboard.setString(ellink);showSharing(false) }} >Aceptar</SCLAlertButton>
            </SCLAlert>
            <SCLAlert
                theme="success"
                show={botonesCompartir}
                title="Necesitas ayuda"
                subtitle="Escríbenos por cualquier de nuestro canales"
                onRequestClose={cierra3}
                >
                <View style={{alignContent:"center",alignItems:"center"}}>
                    <TouchableOpacity onPress={()=>acciona2('whatsapp')} style={styles.activity}>
                        <Text>Whatsapp</Text>  
                    </TouchableOpacity>
                </View>
                <SCLAlertButton theme="info" onPress={handleClose3} >Aceptar</SCLAlertButton>
            </SCLAlert>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    detalleimg1:{
        flex:1,
        resizeMode:"cover",
        justifyContent:"flex-end"    
    },
    imgIcon:{
        width:70,
        height:70,
        marginBottom:10
    },
    detalleitem1:{
        flexDirection:"column",
        backgroundColor:"#246BA6"
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
        color:"#2064AC",
        fontSize:18,
        justifyContent:"center",
        textAlign:"center",
        padding:10
    },
    barraSub:{
        backgroundColor:"#E6E6E6",
    },
    barraSubtitle:{
        shadowColor: "#f00",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
        backgroundColor:"#16467A",
    },
    subtitle:{
        color:"#fff",
        fontSize:18,
        backgroundColor:"#51A3DA",
        textAlign:"center"
    },
    grid1:{
        flex:1,
        flexDirection:"row"
    },
    activity:{
        width:"50%",
        alignItems:'center',
        justifyContent:'center',
        height:120
    },
    modalSharing:{
        backgroundColor:"rgba(20,70,122,0.7)",
        marginTop:100,
        height:240,
        borderRadius: 20,
    },
    textModal:{
        backgroundColor:"rgba(255,255,255,0.3)",
        color:"#fff"
    },
    titleshare:{
        color:"#fff",
        fontSize:25,
        textAlign:"center"
    },
    descshare:{
        color:"#e7e7e7",
        textAlign:"justify"
    },
    linkComparte:{
        color:"#000",
        borderColor:"#000",
        borderWidth:1
    },
    btnAct:{
        color:"#fff",
        fontWeight:'bold',
        textAlign:"center"
    }
})