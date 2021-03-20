import React,{ useState } from 'react';
import FormularioUsuarioNuevo from '../formulariousuarionuevo/formulariousuarionuevo';
import { StyleSheet, View, StatusBar } from 'react-native';

export function RegisterScreen({navigation}){
  
    const [modalVisible,setModalVisible] = useState(true);

    
  
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="#16467A" barStyle="dark-content" hidden={false}></StatusBar>
      <FormularioUsuarioNuevo onregister={()=>setModalVisible(false)} ></FormularioUsuarioNuevo>
    </View>
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
  