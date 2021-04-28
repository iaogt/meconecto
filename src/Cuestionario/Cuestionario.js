import React,{ useEffect,useState } from 'react';
import { StyleSheet,View,Text,Button } from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    SCLAlert,
    SCLAlertButton
  } from 'react-native-scl-alert'
import { useDispatch,useSelector } from 'react-redux';
import CompetitionFactory from '../entities/competitionsFactory'

const preguntas = [
    {
        "texto":"Cuál de las siguientes palabras es la definición más correcta de sexting",
        "ops":[
            {label:"Pornografía"},
            {label:"Violencia"},
            {label:"Acoso Sexual"},
            {label:"Auto denigración"}
        ]
    },
    {
        "texto":"Qué factores considera usted que promueve más el sexting y bullying",
        "ops":[
            {label:"Antivalores"},
            {label:"Medios de comunicación"},
            {label:"Globalización"},
            {label:"Falta de comunicación familiar"}
        ]
    }
]/*, 
    {
        "texto":"Por qué medio de comunicación cree usted que se difunda más el sexting y bullying",
        "ops":[
            {label:"Teléfono"},
            {label:"Internet"},
            {label:"Radio"},
            {label:"Periódico"}
        ]
    },  
    {
        "texto":"Quiénes deben cuidar que no se de este fenómeno",
        "ops":[
            {label:"Padres de familia"},
            {label:"Autoridades de gobierno"},
            {label:"Docentes académicos"},
            {label:"Periódico"}
        ]
    },
    {
        "texto":"Cómo cree que se manifiesta el sexting",
        "ops":[
            {label:"Por agresiones físicas"},
            {label:"Acoso sexual"},
            {label:"Imágenes pornográficas"},
            {label:"Por agresiones orales"}
        ]
    },  
    {
        "texto":"Cómo podría usted combatir con este problema en la sociedad",
        "ops":[
            {label:"Apoyo humanitario"},
            {label:"Dialogando"},
            {label:"Matando gente"}        
        ]
    }   
]*/

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
    const quid = state => state.users;
    const iuid = useSelector(quid);
    const sel1 = state => state.activities;
    const selected = useSelector(sel1);
    const dispatch = useDispatch();

    
    useEffect(()=>{
        setP(shuffle(preguntas));
    },[])

    const siguiente = (num)=>{
        if(current<(setpreguntas.length-1)){
            setCurrent(current+1);
        }else{
            setTermino(true);
            //let nuevaactivity = Object.assign({},iuid.data);
            let objActiv = CompetitionFactory.emptyCompetitionData();
            objActiv.punteo = 10;
            objActiv.logros.compite=1;
            let objCompetition = {};
            objCompetition[selected.selected]=objActiv;
            dispatch({type:"user/endsurvey",payload:objCompetition});
        }
    }

    const handleClose1 = ()=>{
        setInicia(false);
    }

    const handleClose = ()=>{
        props.avanza()
    }

    const cierra = ()=>{
        setTermino(true);
    }

    const getColor = () => {
        
        return "#FFD700"
    }



    return (
        <View>
        {
            setpreguntas.map((p,i)=>{
                return (
                <View key={"p"+i} style={{"display":(i==current)?"flex":"none"}}>
                    <Text style={styles.pregunta}>¿{p.texto}?</Text>
                    <RadioButtonRN
                        data={p.ops}
                    />
                    <Button title="Siguiente" onPress={()=>siguiente(i)}/>
                </View>
                )
            })
        }
            <SCLAlert
                theme="info"
                show={inicia}
                title="Compite"
                subtitle="Elige las respuestas correctas y consigue el premio mayor"
                onRequestClose={cierra}
                >
                <SCLAlertButton theme="info" onPress={handleClose1} >Aceptar</SCLAlertButton>
            </SCLAlert>
            <SCLAlert
                theme="success"
                show={termino}
                title="Resultado Final"
                subtitle="Por tus respuestas obtuviste"
                onRequestClose={cierra}
                >
                <View style={{alignContent:"center",alignItems:"center"}}>
                    <Icon name="trophy" size={50} color={getColor} />
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
        marginHorizontal:5
    }
})