import React,{useEffect,useState} from 'react';
import { View, FlatList,Text,StyleSheet,ImageBackground,TouchableOpacity,Modal,Linking } from 'react-native';
import {useSelector} from 'react-redux';
import UserEntity from '../entities/userEntity';
import FormularioUsuarioNuevo from '../formulariousuarionuevo/formulariousuarionuevo';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import ActivityFactory from '../entities/activityFactory';


const lista = ActivityFactory.getActivities();

const lista2 = [
    {
        id:"av",
        title:'Alta Verapaz',
        points:100
    },
    {
        id:"bv",
        title:'Baja Verapaz',
        points:100
    },
    {
        id:"ch",
        title:'Chimaltenango',
        points:90
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
        id:"maza",
        title:"Mazatenango",
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

const Item = ({title,img,avanza,puntos})=>(
    <TouchableOpacity
    onPress={avanza}>
    <View style={styles.item1}>
            <ImageBackground source={{uri:img}} style={styles.img1}>
            <View style={styles.b1}>
                <View style={{flex:0.7}}>
                    <Text style={styles.t1}>{title}</Text>
                </View>
                <View style={{flex:0.3,alignContent:"flex-end"}}>
                    {(puntos==0) ?
                    <Text style={styles.t2}>0</Text>
                    : (puntos<30) ? 
                        <Icon name="trophy" size={30} color="#cd7f32" style={{marginLeft:40,marginTop:5}}/> 
                        : (puntos>30 && puntos < 70) ?  <Icon name="trophy" size={30} color="#C0C0C0" /> 
                            : (puntos>70) ? <Icon name="trophy" size={30} color="#FFD700" /> : null
                    }

                </View>
            </View>
            </ImageBackground>
    </View>
    </TouchableOpacity>
)

const Item2 = ({title,points})=>(
    <TouchableOpacity>
    <View>
        <View style={{flexDirection:'row'}}>
            <View style={{flex:0.7,paddingTop:5,paddingBottom:5,justifyContent:"center"}}>
                <Text style={{fontSize:18,marginLeft:5}}>{title}</Text>
            </View>
            <View style={{flex:0.3,alignContent:"flex-end",paddingTop:5,paddingBottom:5,justifyContent:"center"}}>
                <Text style={{alignContent:"flex-end"}}>{points}</Text>
            </View>
        </View>
    </View>
    </TouchableOpacity>
)

export default function Listado(props){
    const [selView,setView] = useState(1)
    const quid = state => state.users;
    const iuid = useSelector(quid);
    const [userdata,setData] = useState(null);
    const [modalvisible,setModal] = useState(false);
    const dispatch = useDispatch();
    const [topranking,setRank] = useState([]);

    useEffect(()=>{
        if(iuid.userid!=""){
            UserEntity.loadUser(iuid.userid)
            .then((data)=>{
                if(data!=null){
                    setData(data);
                    dispatch({type:'user/gotdata',payload:data});
                }else{
                    setModal(true);
                }
            })
            .catch(e=>{
                setModal(true);
            })
        }else{
            console.log("error de autenticacin de usuario");
        }
        let topranking = [...lista2];
        topranking = topranking.sort((a,b)=>{ return a.points<b.points })
        setRank(topranking);
    },[])

    const selecciona = (idcompetencia)=>{
        console.log("competencia:");
        console.log(idcompetencia);
        dispatch({type:"activity/selected",payload:idcompetencia})
        props.avanzar();
    }

    const renderizable = (({item}) => {
        console.log("userdata");
        console.log(userdata);
        let pts=0;
        if(userdata!=null){
            pts = userdata['competencias'][item.id]['punteo'];
        }
        return (
            <Item title={item.title} img={item.img} avanza={()=>selecciona(item.id)} puntos={pts}/>
            )
        });

    const renderizable2 = ({item}) => (
        <Item2 title={item.title} points={item.points}/>
    );




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
            </View>
            {
            (selView==1) ?
                <FlatList
                data={lista}
                renderItem={renderizable}
                keyExtractor={item=>item.id}
                />
            :
                <FlatList
                data={topranking}
                renderItem={renderizable2}
                keyExtractor={item=>item.id}
                />
            }
            <Modal visible={modalvisible} onRequestClose={()=>{}}>
                <FormularioUsuarioNuevo userid={iuid.userid} onregister={()=>setModal(false)}></FormularioUsuarioNuevo>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
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
      color:"#F6C015",
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
        backgroundColor: "#2064AC",
        opacity:0.9,
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