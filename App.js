import 'react-native-gesture-handler'
import React,{ useState } from 'react';
import { StyleSheet, Text, View,Platform,StatusBar,Modal } from 'react-native';
import FormularioUsuarioNuevo from './src/formulariousuarionuevo/formulariousuarionuevo';
import Listado from './src/listado/listado';
import Detalle from './src/detalle/detalle';
import Cuestionario from './src/Cuestionario/Cuestionario';
import Resultado from './src/Cuestionario/Resultado';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

function ResultadoScreen({navigation}){
  return (
    <View>
      <Resultado avanza={()=>navigation.popToTop()}></Resultado>
    </View>
  )
}

function CuestionarioScreen({navigation}){
  return (
    <View>
      <Cuestionario avanza={()=>navigation.navigate("Resultado")}></Cuestionario>
    </View>
  )
}

function DetalleScreen({navigation}){
  return (
    <View>
      <Detalle avanza={()=>navigation.navigate("Cuestionario")}></Detalle>
    </View>
  )
}

function HomeScreen({navigation}){

  const [modalVisible,setModalVisible] = useState(true);

  return (
    <View style={styles.container}>
    <StatusBar backgroundColor="#16467A" barStyle="dark-content" hidden={false}></StatusBar>
    <Listado avanzar={()=>navigation.navigate('Detalle')} ></Listado>
    <Modal
      animationType="slide"
      visible={modalVisible}
      onRequestClose={()=>{
        setModalVisible(!modalVisible);
      }}>
      <FormularioUsuarioNuevo onregister={()=>setModalVisible(false)} ></FormularioUsuarioNuevo>
    </Modal>
  </View>
  )
}

const Stack = createStackNavigator();


export default function App() {

  const commonOptions = {
    headerStyle:{
      backgroundColor:"#2064AC"
    },
    headerTintColor: '#fff',
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MeConectoSinClavos" component={HomeScreen} options={commonOptions}/>
        <Stack.Screen name="Detalle" component={DetalleScreen} options={commonOptions}/>
        <Stack.Screen name="Cuestionario" component={CuestionarioScreen} options={commonOptions}/>
        <Stack.Screen name="Resultado" component={ResultadoScreen} options={commonOptions}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
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
