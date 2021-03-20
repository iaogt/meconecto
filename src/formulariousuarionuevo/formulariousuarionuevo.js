import { Keyboard, KeyboardAvoidingView } from "react-native";
import { TextInput,Text, StatusBar,StyleSheet,Platform,View,Button  } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';


import React from 'react';

export default function FormularioUsuarioNuevo(props){

    const [usuario,setUsuario]=React.useState('');
    const [edad,setEdad]=React.useState(0);
    const [genero,setGenero]=React.useState(0);
    const [ubicacion,setUbicacion]=React.useState(0);

    const createAnonymousUser = (d)=>{
        auth().signInAnonymously().then((user)=>{
            console.log("logeado");
            console.log(user);
            database()
            .ref('/users/'+user.user.uid)
            .set({
                nombre: usuario,
                edad: edad,
              })
            .then(() => console.log('Usuario creado'));
        })
        .catch(error=>{
            console.log("no logeado");
            console.log(error);
        })
    }

    return (
        <View style={styles.general}>
            <KeyboardAvoidingView>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Usuario:</Text>
                    <TextInput placeholder="(Escribe tu usuario)" onChangeText={text=>setUsuario(text)}></TextInput>
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Edad:</Text>
                    <TextInput placeholder="(Escribe tu edad)" onChangeText={text=>setEdad(text)}></TextInput>
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Género:</Text>
                    <Picker>
                    <Picker.Item label="Femenino" value="f"/>
                        <Picker.Item label="Masculino" value="m"/>
                    </Picker>
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Confirma tu ubicación:</Text>
                    <Picker>
                        <Picker.Item label="Alta Verapaz" value="av"/>
                        <Picker.Item label="Baja Verapaz" value="bv"/>
                        <Picker.Item label="Chimaltenango" value="ch"/>
                        <Picker.Item label="Chiquimula" value="av"/>
                        <Picker.Item label="Escuintla" value="bv"/>
                        <Picker.Item label="El Progreso" value="ch"/>
                    </Picker>
                </View>
                <Button title="Registrarme" color="#F6C015" style={styles.btnRegistrarme} onPress={createAnonymousUser}/>
            </KeyboardAvoidingView>
        </View>

    )
}

const styles = StyleSheet.create({
    general:{
        fontSize:40
    },
    barraSuperior:{
        height:50,
        backgroundColor:"#2064AC",
        textAlign:"center",
        justifyContent:"center"
    },
    titulo:{
        fontSize:30,
        color:"#F6C015",
        textAlign:"center"
    },
    label:{
        fontSize:20
    },
    inputGroup:{
        paddingTop:7,
        paddingLeft:5
    },
    btnRegistrarme:{
        color:"#fff"
    }
})