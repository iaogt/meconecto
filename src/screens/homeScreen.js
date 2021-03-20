import React,{ useState } from 'react';
import { StyleSheet, View,StatusBar } from 'react-native';
import Listado from '../listado/listado';

export function HomeScreen({navigation}){
  
    const [modalVisible,setModalVisible] = useState(true);

    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="#16467A" barStyle="dark-content" hidden={false}></StatusBar>
      <Listado avanzar={()=>navigation.navigate('Detalle')} ></Listado>
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
  