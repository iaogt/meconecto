import React,{useEffect,useState,useLayoutEffect} from 'react';
import { View, FlatList,Text,StyleSheet,ImageBackground,TouchableOpacity,Modal,Linking,Image,Dimensions,ScrollView } from 'react-native';
import {useSelector} from 'react-redux';
import UserEntity from '../entities/userEntity';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import ActivityFactory from '../entities/activityFactory';

const lista = ActivityFactory.getActivities();

const lista2 = [
    {
        id:"av",
        title:'Alta Verapaz',
        points:0
    },
    {
        id:"bv",
        title:'Baja Verapaz',
        points:0
    },
    {
        id:"ch",
        title:'Chimaltenango',
        points:0
    },
    {
        id:"chiq",
        title:"Chiquimula",
        points:0
    },
    {
        id:"esc",
        title:"Escuintla",
        points:0
    },
    {
        id:"prog",
        title:"El Progreso",
        points:0
    },
    {
        id:"guat",
        title:"Guatemala",
        points:0
    },
    {
        id:"huehue",
        title:"Huehuetenango",
        points:0
    },
    {
        id:"iz",
        title:"Izabal",
        points:0
    },
    {
        id:"jal",
        title:"Jalapa",
        points:0
    },
    {
        id:"jut",
        title:"Jutiapa",
        points:0
    },
    {
        id:"suchi",
        title:"Suchitepequez",
        points:0
    },
    {
        id:"peten",
        title:"Petén",
        points:0
    },
    {
        id:"que",
        title:"Quetzaltenango",
        points:0
    },
    {
        id:"qui",
        title:"Quiché",
        points:0
    },
    {
        id:"reu",
        title:"Retalulheu",
        points:0
    },
    {
        id:"sac",
        title:"Sacatepequez",
        points:0
    },
    {
        id:"san",
        title:"San Marcos",
        points:0
    },
    {
        id:"santa",
        title:"Santa Rosa",
        points:0
    },
    {
        id:"sol",
        title:"Sololá",
        points:0
    },
    {
        id:"toto",
        title:"Totonicapán",
        points:0
    },
    {
        id:"za",
        title:"Zacapa",
        points:0
    }
]

const ancho = Dimensions.get('window').width;

const Item = ({title,img,avanza,puntos})=>(
    <TouchableOpacity
    onPress={avanza}>
    <View style={styles.item1}>
            <ImageBackground source={{uri:img}} style={styles.img1}>
            <View style={styles.b1}>
                <View style={{flex:0.1}}>
                <Image source={require('../assets/play-button.png')} style={{width:20, height:20,margin:5}}/>
                </View>
                <View style={{flex:0.6}}>
                    <Text style={styles.t1}>{title}</Text>
                </View>
                <View style={{flex:0.3,alignContent:"flex-end"}}>
                    {(puntos==0) ?
                    <Text style={styles.t2}></Text>
                    : (puntos<=30) ? 
                        <Icon name="trophy" size={30} color="#cd7f32" style={{marginLeft:40,marginTop:5}}/> 
                        : (puntos>30 && puntos <= 70) ?  <Icon name="trophy" size={30} color="#C0C0C0" /> 
                            : (puntos>70) ? <Icon name="trophy" size={30} color="#FFD700" /> : null
                    }

                </View>
            </View>
            </ImageBackground>
    </View>
    </TouchableOpacity>
)

const Item2 = ({title,points,inx})=>{
    let fondo1="#E6E6E6";
    let fondo2="#F5F5F5"
    if((inx % 2)==1){
        fondo1="#fff";
        fondo2="#fff";
    }
    return (
    <TouchableOpacity>
    <View>
        <View style={{flexDirection:'row',}}>
            <View style={{flex:0.5,paddingTop:5,paddingBottom:5,justifyContent:"center",backgroundColor:fondo1}}>
                <Text style={{fontSize:18,marginLeft:5,textAlign:"center",color:"#246BA6",fontWeight:"bold"}}>{title}</Text>
            </View>
            <View style={{flex:0.5,alignContent:"flex-end",paddingTop:5,paddingBottom:5,justifyContent:"center",backgroundColor:fondo2}}>
                <Text style={{alignContent:"flex-end",textAlign:"center",color:"#246BA6"}}>{points}</Text>
            </View>
        </View>
    </View>
    </TouchableOpacity>
)
    }

export default function Listado(props){
    const [selView,setView] = useState(1)
    const quid = state => state.users;
    const iuid = useSelector(quid);
    const dispatch = useDispatch();
    const [topranking,setRank] = useState([]);

    useEffect(()=>{
        UserEntity.getRanking()
        .then((data)=>{
            console.log(data);
            console.log("ranking descargado:");
            let finalRank = lista2.map(obj=>{
                let newobj = {};
                if(data[obj.id]!=undefined){
                    newobj = {...obj,points:data[obj.id]}
                }else{
                    newobj = obj;
                }
                return newobj;
            })
            console.log(finalRank);
            finalRank = finalRank.sort((a,b)=>{ return b.points-a.points })
            setRank(finalRank);
        });
    },[])

    const selecciona = (idcompetencia)=>{
        dispatch({type:"activity/selected",payload:idcompetencia})
        props.avanzar(idcompetencia);
    }

    const renderizable = (({item}) => {
        let pts=0;
        if(props.datosusuarios!=null){
            pts = props.datosusuarios['competencias'][item.id]['punteo'];
        }
        return (
            <Item title={item.title} img={item.img} avanza={()=>selecciona(item.id)} puntos={pts}/>
            )
        });

    const renderizable2 = ({item,index}) => (
        <Item2 title={item.title} points={item.points} inx={index}/>
    );
    
    const descarga = (seccion)=>{

        let url = "";
        switch(seccion){
            case "comic":{
                url = "https://meconectosinclavos.net.gt/wp-content/uploads/2017/02/COMIC.pdf";
                break;
            }
            case "padres":{
                url = "https://meconectosinclavos.net.gt/wp-content/uploads/2017/02/COMIC.pdf";
                break;
            }
            case "educadores":{
                url = "https://meconectosinclavos.net.gt/wp-content/uploads/2020/11/mcsc-guia-educadores.pdf";
                break;
            }
            case "comunitarios":{
                url = "https://meconectosinclavos.net.gt/wp-content/uploads/2020/11/mcsc-guia-lideres-comunitarios.pdf";
                break;
            }
            case "educavet":{
                url = "https://meconectosinclavos.net.gt/wp-content/uploads/2020/11/GUIA-EDUCAVET.pdf";
                break;
            }
            case "seguridad":{
                url = "https://meconectosinclavos.net.gt/wp-content/uploads/2020/12/MINI-GUIA-DE-SEGURIDAD-EN-INTERNET.pdf";
                break;
            }
        }
        
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
    }



    return (
        <View style={styles.container}>
            <View style={styles.tabis}>
                    <View style={(selView==1) ? [styles.tabi,styles.selectedtab] : styles.tabi}>
                        <TouchableOpacity onPress={()=>setView(1)}>
                            <Text style={styles.tabitxt}>Competencias</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={(selView==2) ? [styles.tabi,styles.selectedtab] : styles.tabi}>
                        <TouchableOpacity onPress={()=>setView(2)}>
                            <Text style={styles.tabitxt}>Ranking</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={(selView==3) ? [styles.tabi,styles.selectedtab] : styles.tabi}>
                        <TouchableOpacity onPress={()=>setView(3)}>
                            <Text style={styles.tabitxt}>Descargas</Text>
                        </TouchableOpacity>
                    </View>
            </View>
            {
            (selView==1) ?
                <FlatList
                data={lista}
                renderItem={renderizable}
                keyExtractor={item=>item.id}
                />
            : (selView==2) ?
                <FlatList
                data={topranking}
                renderItem={renderizable2}
                keyExtractor={item=>item.id}
                />
                :
                <ScrollView>
                    <Text style={styles.titulo1}>Descarga nuestro comic</Text>
                    <TouchableOpacity onPress={()=>descarga('comic')} >
                    <Image style={{width:ancho,height:(ancho*0.54)}} source={require("../assets/comic1.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>descarga('comic')} >
                    <Text style={styles.descarga}>Descarga aquí</Text>
                    </TouchableOpacity>
                    <Text style={styles.titulo2}>Guía de padres</Text>
                    <TouchableOpacity onPress={()=>descarga('padres')} >
                    <Image style={{width:ancho,height:(ancho*0.96)}} source={require("../assets/padres.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>descarga('padres')} >
                    <Text style={styles.descarga}>Descarga aquí</Text>
                    </TouchableOpacity>
                    <Text style={styles.titulo2}>Guía de educadores</Text>
                    <TouchableOpacity onPress={()=>descarga('educadores')} >
                    <Image style={{width:ancho,height:(ancho*0.96)}} source={require("../assets/educadores.jpg")}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>descarga('educadores')} >
                    <Text style={styles.descarga}>Descarga aquí</Text>
                    </TouchableOpacity>
                    <Text style={styles.titulo2}>Guía de comunitarios</Text>
                    <TouchableOpacity onPress={()=>descarga('comunitarios')} >
                    <Image style={{width:ancho,height:(ancho*0.96)}} source={require("../assets/comunitarios.jpg")}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>descarga('comunitarios')} >
                    <Text style={styles.descarga}>Descarga aquí</Text>
                    </TouchableOpacity>
                    <Text style={styles.titulo2}>Guía EDUCAVET</Text>
                    <TouchableOpacity onPress={()=>descarga('educavet')} >
                    <Image style={{width:ancho,height:(ancho*0.96)}} source={require("../assets/educavet.jpg")}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>descarga('educavet')} >
                    <Text style={styles.descarga}>Descarga aquí</Text>
                    </TouchableOpacity>
                    <Text style={styles.titulo2}>Mini guía de seguridad</Text>
                    <TouchableOpacity onPress={()=>descarga('seguridad')} >
                    <Image style={{width:ancho,height:(ancho*0.96)}} source={require("../assets/guia.jpg")}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>descarga('seguridad')} >
                    <Text style={styles.descarga}>Descarga aquí</Text>
                    </TouchableOpacity>
                </ScrollView>
            } 
        </View>
    )
}

const styles = StyleSheet.create({
    descarga:{
        textAlign:"center",
        fontWeight:"bold",
        textDecorationLine:"underline",
        color:"#2064AC",
        fontSize:20
    },
    titulo1:{
        fontSize:14,
        fontFamily:"DaysOne-Regular",
        textAlign:"center",
        backgroundColor:"#F6C015",
        paddingTop:10,
        paddingBottom:10
    },
    titulo2:{
        fontSize:14,
        fontFamily:"DaysOne-Regular",
        textAlign:"center",
        backgroundColor:"#F6C015",
        paddingTop:10,
        paddingBottom:10,
        marginTop:25
    },
    tabis:{
        flexDirection:'row',
        height:40
    },
    tabi:{
        flex:0.5,
        flexDirection:"column",
        alignItems:"center"
    },
    tabitxt:{
        paddingTop:10,
        textAlign:'center'
    },
    selectedtab:{
        borderBottomColor:"#F6C015",
        borderBottomWidth:2
    },
    container:{
        flex:1,
        marginLeft:3,
        marginRight:3,
    },
    img1:{
        flex:1,
        resizeMode:"cover",
        justifyContent:"flex-end"
    },
    item1:{
        height:200,
        marginTop:7

    },
    tt1:{
        fontSize:25,
        color:"#2064AC",
        marginTop:10,
        marginBottom:10
    },
    t1:{
      color:"#fff",
      opacity:1,
      fontSize:20,
      fontFamily:"DaysOne-Regular"
    },
    t2:{
        color:"#fff",
        opacity:1,
        fontSize:25,
        textAlign:"right",
        fontFamily:"normal",
        marginRight:20
      },
    b1:{
        backgroundColor: "#51A3DA",
        opacity:1,
        height:50,
        flexDirection:"row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2
    }
});