import { Keyboard, KeyboardAvoidingView } from "react-native";
import { TextInput,Text, StatusBar,StyleSheet,Platform,View,Button  } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import auth from '@react-native-firebase/auth';
import React from 'react';
import UserEntity from "../entities/userEntity";
import UserFactory from '../entities/userFactory';
import {useSelector} from 'react-redux';

export default function FormularioUsuarioNuevo(props){

    const quid = state => state.users;
    const iuid = useSelector(quid);

    const [telefono,setTelefono]=React.useState('');
    const [usuario,setUsuario]=React.useState('');
    const [edad,setEdad]=React.useState(0);
    const [genero,setGenero]=React.useState(0);
    const [ubicacion,setUbicacion]=React.useState("av");

    const createAnonymousUser = (d)=>{
        console.log("creara usuario");
        let objUser=UserFactory.createUser();
        objUser.usuario= usuario;
        objUser.telefono= telefono;
        objUser.edad = edad;
        objUser.genero = genero;
        objUser.ubicacion = ubicacion;
        UserEntity.createUser(props.userid,objUser)
        .then((d)=>{
            props.onregister();
        })
    }

    return (
        <View style={styles.general}>
            <KeyboardAvoidingView>
                <Text style={styles.titulo1}>Completa Perfil</Text>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Usuario:</Text>
                    <TextInput placeholder="(Escribe tu usuario)" onChangeText={text=>setUsuario(text)} style={styles.tIn}></TextInput>
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Edad:</Text>
                    <TextInput placeholder="(Escribe tu edad)" onChangeText={text=>setEdad(text)} style={styles.tIn}></TextInput>
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>G??nero:</Text>
                    <Picker
                        onValueChange={(v)=>setGenero(v)}  style={styles.tIn} selectedValue={genero}
                    >
                        <Picker.Item label="Femenino" value="f"/>
                        <Picker.Item label="Masculino" value="m"/>
                    </Picker>
                </View>
                <View style={styles.inputGroup2}>
                    <Text style={styles.label}>Confirma tu ubicaci??n:</Text>
                    <Picker onValueChange={(v)=>setUbicacion(v)} selectedValue={ubicacion}  style={styles.tIn}>
                        <Picker.Item label="Alta Verapaz" value="av"/>
                        <Picker.Item label="Baja Verapaz" value="bv"/>
                        <Picker.Item label="Chimaltenango" value="ch"/>
                        <Picker.Item label="Chiquimula" value="chiq"/>
                        <Picker.Item label="Escuintla" value="esc"/>
                        <Picker.Item label="El Progreso" value="prog"/>
                        <Picker.Item label="Guatemala" value="guat"/>
                        <Picker.Item label="Huehuetenango" value="huehue"/>
                        <Picker.Item label="Izabal" value="iz"/>
                        <Picker.Item label="Jalapa" value="jal"/>
                        <Picker.Item label="Jutiapa" value="jut"/>
                        <Picker.Item label="Mazatenango" value="maza"/>
                        <Picker.Item label="Pet??n" value="peten"/>
                        <Picker.Item label="Quetzaltenango" value="que"/>
                        <Picker.Item label="Quich??" value="qui"/>
                        <Picker.Item label="Rethaluleu" value="reu"/>
                        <Picker.Item label="Sacatepequez" value="sac"/>
                        <Picker.Item label="San Marcos" value="san"/>
                        <Picker.Item label="Santa Rosa" value="santa"/>
                        <Picker.Item label="Solol??" value="sol"/>
                        <Picker.Item label="Totonicap??n" value="toto"/>
                        <Picker.Item label="Zacapa" value="za"/>
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
    titulo1:{
        padding:7,
        fontSize:18,
        fontFamily:"DaysOne-Regular",
        textAlign:"center",
        backgroundColor:"#51A3DA"
    },
    label:{
        fontSize:17
    },
    inputGroup:{
        paddingTop:7,
        paddingLeft:5
    },
    inputGroup2:{
        marginBottom:20,
        paddingTop:7,
        paddingLeft:5
    },
    btnRegistrarme:{
        color:"#fff",
        marginTop:20
    },
    btnBack:{
        color:"#000",
        marginTop:15,
        backgroundColor:"#e7e7e7"
    },
    tIn:{
        backgroundColor:"#f5f5f5"
    }
})