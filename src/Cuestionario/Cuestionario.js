import React,{ useEffect,useState } from 'react';
import { StyleSheet,View,Text,Button,Alert,ScrollView } from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    SCLAlert,
    SCLAlertButton
  } from 'react-native-scl-alert'
import { useDispatch,useSelector } from 'react-redux';
import CompetitionFactory from '../entities/competitionsFactory'

import UserEntity from '../entities/userEntity';

const shuffle = (a)=>{
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

export default function Cuestionario(props){

    const [current,setCurrent] = useState(0);
    const [inicia,setInicia] = useState(true);
    const [termino,setTermino] = useState(false);
    const [setpreguntas,setP] = useState([]);
    const [punteo,setPunteo] = useState(0);
    const [respuesta,setResp] = useState({});
    const quid = state => state.users;
    const iuid = useSelector(quid);
    const sel1 = state => state.activities;
    const selected = useSelector(sel1);
    const dispatch = useDispatch();

    
    useEffect(()=>{
        let edad = iuid.data.edad;
        if(isNaN(edad)) edad = 18;
        console.log("competencia seleccionada:");
        console.log(edad);
        let preguntas = CompetitionFactory.Questions(edad,selected.selected);
        console.log("preguntas:");
        console.log(preguntas);
        setP(shuffle(preguntas));
    },[])

    const siguiente = ()=>{
        if(current<(setpreguntas.length-1)){
            let valids = setpreguntas[current]['valid'];
            let esvalido = valids.reduce((acc,i)=>{ if(setpreguntas[current]['ops'][i]==respuesta) return true; else return false },false);
            if(esvalido){
                setPunteo(punteo+10);
            }
            setCurrent(current+1);
        }else{
            setTermino(true);
            //let nuevaactivity = Object.assign({},iuid.data);
            let objActiv = CompetitionFactory.emptyCompetitionData();
            let pu = Math.ceil((punteo/(current*10))*100);
            objActiv.punteo = pu;
            console.log("punteo:"); 
            console.log(objActiv.punteo);
            console.log("pu:"+punteo+"/"+(current*10)+"*100");
            objActiv.logros.compite=1;
            let objCompetition = {};
            objCompetition[selected.selected]=objActiv;
            dispatch({type:"user/endsurvey",payload:objCompetition});
            setPunteo(pu);
        }
    }

    const handleClose1 = ()=>{
        setInicia(false);
    }

    const handleClose = ()=>{
        UserEntity.updateCompetitions(iuid.userid,iuid.data)
        .then(d=>{
            setTermino(true);
            props.avanza()
        })
        .catch(e=>{
            Alert.alert("Error","Error al grabar los datos",[{text:"Ok",onPress:()=>{
                console.log(e);
            }}]);
        })
    }

    const cierra = ()=>{
        setTermino(true);
    }

    const getColor = () => {
        let color="#FFD700";
        if((punteo>=0)&&(punteo<40)){
            color="#cd7f32"
        }else if((punteo>=40)&&(punteo<80)){
            color="#c0c0c0"
        }
        return color;
    }

    const getTitulo = ()=>{
        let titulo = "¡Peligro!";
        if((punteo>=60)&&(punteo<80)){
            titulo="Muy bien"
        }else if((punteo>=80)){
            titulo="¡Excelente!"
        }
        return titulo;
    }

    const getDesc = ()=>{
        let desc = "Infórmate mejor para protegerte en el ciberespacio";
        let color = "";
        if((punteo>=60)&&(punteo<80)){
            desc = "En su mayoría, pero aún puedes seguir mejorando"
        }else if((punteo>=80)){
            desc = "Conoces mucho, pero mantente siempre alerta";
        }
        return desc;
    }

    const optSelected=(e)=>{
        setResp(e);
    }

    return (
        <View style={{backgroundColor:"#fff",flex:1}}>
            <ScrollView style={{backgroundColor:"#fff",flex:0.8}}>
            {setpreguntas.map((p,i)=>{
                return (
                    <View key={"p"+i} style={{"display":(i==current)?"flex":"none",backgroundColor:"#fff",color:"#fff"}}>
                        <Text style={styles.pregunta}>¿{p.texto}?</Text>
                        <RadioButtonRN
                            data={p.ops}
                            selectedBtn={optSelected}
                            boxDeactiveBgColor="#E6E6E6"
                            textStyle={{color:"#246BA6"}}
                            deactiveColor="#51A3DA"
                        />                        
                    </View>
                )
                })
            }
            </ScrollView>
            <View style={{flex:0.2,justifyContent:"flex-end"}}>
            <Button title="Siguiente" onPress={()=>siguiente()} color="#F6C015" style={{position:'absolute',bottom:0}}/>
            </View>
            <SCLAlert
                theme="info"
                show={inicia}
                title="Compite"
                subtitle="Elige las respuestas correctas y consigue el premio mayor"
                >
                <SCLAlertButton theme="info" onPress={handleClose1} >Aceptar</SCLAlertButton>
            </SCLAlert>
            <SCLAlert
                theme="success"
                show={termino}
                title={getTitulo()}
                subtitle={getDesc()}
                onRequestClose={handleClose}
                >
                <View style={{alignContent:"center",alignItems:"center"}}>
                    <Icon name="trophy" size={50} color={getColor()}/>
                </View>
                <SCLAlertButton theme="info" onPress={handleClose} >Aceptar</SCLAlertButton>
            </SCLAlert>
        </View>
    )
}

const styles = StyleSheet.create({
    pregunta:{
        fontSize:22,
        textAlign:"justify",
        marginTop:3,
        marginHorizontal:5,
        backgroundColor:"#51A3DA",
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:5,
        paddingRight:5,
        color:"#fff",
        borderRadius:10
    }
})