import React,{useState} from 'react';
import { View,Text,TextInput,StyleSheet,Button,Alert,Image, SafeAreaView} from 'react-native';
import auth from '@react-native-firebase/auth';
import {
    SCLAlert,
    SCLAlertButton
  } from 'react-native-scl-alert'
  import { Dimensions } from "react-native"

export default function IniciarSesion(props){

    const [usuario,setUsuario] = useState("");
    const [confirm,setConfirm] = useState();
    const [code,setCode]=useState("");
    const [paso,setPaso] = useState(1);
    const [enviando,setEnviando]=useState(false);
    const [mensajeerror,setError] = useState("")
    const [hayerror,showError] = useState(false);

    const ancho = Dimensions.get('window').width; //full width
    const alto = ancho*0.13;

    const loginUser = ()=>{
        setEnviando(true);
        let numtel = usuario.trim()
        const confirmation = auth().signInWithPhoneNumber("+502"+numtel)
        confirmation.then((d)=>{
            setEnviando(false);
            console.log("confirmacion");
            console.log(d);
            setConfirm(d);
            setPaso(2);
        }).catch((e)=>{
            console.log("error al registrar");
            console.log(e);
            setEnviando(false);
            setError("Error al registrar el número, intente de nuevo")
            showError(true); 
        })
    }

    const confirmar = ()=>{
        confirm.confirm(code)
        .then((data)=>{
            console.log("siii");
        })
        .catch((e)=>{
            Alert.alert("Error","El código ingresado no coincide",[{text:"Ok",onPress:()=>{console.log("adios")}}]);
        })
    }

    const cierra = ()=>{
        showError(false);
    }

    

    return (
            <SafeAreaView style={{flex:1,justifyContent:"center"}}>
                    <Image source={require('../assets/niniosinicio.png')} style={{width:100,height:100,alignSelf:"center"}}/>
                    <Text style={styles.titulo1}>Iniciar Sesión</Text>
                    {(paso==1) ?
                    <>
                        {
                        (enviando)?
                        <Text>Conectando...</Text>
                        : null
                        }
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Teléfono:</Text>
                            <TextInput placeholder="(Escribe tu teléfono para ingresar)" onChangeText={text=>setUsuario(text)} style={{backgroundColor:"#f5f5f5"}} accesible accessibilityLabel="txtUsername"></TextInput>
                        </View>
                        <Button title="INGRESAR" color="#F6C015" onPress={loginUser}/>
                        <Text style={{textAlign:'justify',color:"#7a7a7a",fontSize:10,marginTop:10}}>+ Al ingresar tu número de teléfono te llegará un SMS con tu clave, así de fácil.</Text>
                        <Text style={{fontSize:10,color:"#7a7a7a"}}>+ El número de teléfono se trata con privacidad y nunca se comparte con ningún tercero</Text>
                    </>
                    :
                    <View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Código confirmación:</Text>
                            <TextInput placeholder="(Escribe el código en SMS)" onChangeText={text=>setCode(text)} style={{backgroundColor:"#f5f5f5"}} accessibilityLabel="txtUserpass" accesible></TextInput>
                        </View>

                        <Button title="CONFIRMAR" color="#F6C015" onPress={confirmar}/>
                    </View>
                    }
                    <View>
                        <Image source={require("../assets/logos2.png")} style={{width:ancho,height:alto,marginTop:5}}/>
                    </View>
                <SCLAlert
                theme="danger"
                show={hayerror}
                title="Error"
                subtitle={mensajeerror}
                onRequestClose={()=>{console.log("nada")}}
                >
                <SCLAlertButton theme="info" onPress={cierra} >Aceptar</SCLAlertButton>
                </SCLAlert>
            </SafeAreaView>            
    )
}

const styles = StyleSheet.create({
    inputGroup:{
        paddingTop:7,
        paddingLeft:5,
        marginBottom:20
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        fontFamily:"DaysOne-Regular"
    },
    titulo1:{
        textAlign:"center",
        color:"#246BA6",
        marginBottom:30
    },
    link:{
        marginTop:10,
        textAlign:"center"
    }
});
