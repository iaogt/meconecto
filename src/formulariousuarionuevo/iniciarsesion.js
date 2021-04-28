import React,{useState} from 'react';
import { View,KeyboardAvoidingView,Text,TextInput,StyleSheet,Button,Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {
    SCLAlert,
    SCLAlertButton
  } from 'react-native-scl-alert'

export default function IniciarSesion(props){

    const [usuario,setUsuario] = useState("");
    const [confirm,setConfirm] = useState();
    const [code,setCode]=useState("");
    const [paso,setPaso] = useState(1);
    const [enviando,setEnviando]=useState(false);
    const [mensajeerror,setError] = useState("")
    const [hayerror,showError] = useState(false);

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
        <View >
            <KeyboardAvoidingView>
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
                    <TextInput placeholder="(Escribe tu teléfono para ingresar)" onChangeText={text=>setUsuario(text)}></TextInput>
                </View>
                <Button title="INGRESAR" color="#F6C015" onPress={loginUser}/>
                <Text style={{textAlign:'justify',color:"#7a7a7a",fontSize:11,marginTop:180}}>+ Al ingresar tu número de teléfono te llegará un SMS con tu clave, así de fácil.</Text>
                <Text style={{fontSize:12,color:"#7a7a7a"}}>+ El número de teléfono se trata con privacidad y nunca se comparte con ningún tercero</Text>
                </>
                :
                <View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Código confirmación:</Text>
                    <TextInput placeholder="(Escribe el código en SMS)" onChangeText={text=>setCode(text)}></TextInput>
                </View>

                <Button title="CONFIRMAR" color="#F6C015" onPress={confirmar}/>
                </View>
                }
                {
                //<Text onPress={props.nouser} style={styles.link}>¿No tienes usuario?</Text>
                }
            </KeyboardAvoidingView>
            <SCLAlert
                theme="danger"
                show={hayerror}
                title="Error"
                subtitle={mensajeerror}
                >
                <SCLAlertButton theme="info" onPress={cierra} >Aceptar</SCLAlertButton>
            </SCLAlert>
        </View>
    )
}

const styles = StyleSheet.create({
    inputGroup:{
        paddingTop:7,
        paddingLeft:5
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        fontFamily:"DaysOne-Regular"
    },
    titulo1:{
        marginTop:40,
        marginBottom:25,
        fontFamily:"DaysOne-Regular",
        fontSize:14,
        alignContent:"center",
        textAlign:"center"
    },
    link:{
        marginTop:10,
        textAlign:"center"
    }
});