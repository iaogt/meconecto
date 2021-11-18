import React,{ useState } from 'react';
import FormularioUsuarioNuevo from '../formulariousuarionuevo/formulariousuarionuevo';
import IniciarSesion from '../formulariousuarionuevo/iniciarsesion';
import { StyleSheet, View, StatusBar,KeyboardAvoidingView,TextInput } from 'react-native';

export function RegisterScreen({navigation}){
  
    const [modalVisible,setModalVisible] = useState(true);
    const [mostrar, setMostrar] = useState(1);

    return (
      <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={50}>
      <StatusBar backgroundColor="#16467A" barStyle="dark-content" hidden={false}></StatusBar>
      { (mostrar==1) ?
      <IniciarSesion nouser={()=>setMostrar(2)}></IniciarSesion>
      :
      <FormularioUsuarioNuevo onregister={()=>setModalVisible(false)} hasuser={()=>setMostrar(1)}></FormularioUsuarioNuevo>
      }
    </KeyboardAvoidingView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      fontFamily:"DaysOne-Regular"
    },
    statusBar:{
      height:20
  }
  });
  