import 'react-native-gesture-handler'
import React,{ useState,useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import { HomeScreen, DetalleScreen, CuestionarioScreen, ResultadoScreen,RegisterScreen } from './src/screens'
import auth from '@react-native-firebase/auth';
import { Button } from 'react-native';
import database from '@react-native-firebase/database';


const Stack = createStackNavigator();


export default function App() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();


  const commonOptions = {
    headerStyle:{
      backgroundColor:"#2064AC"
    },
    headerTintColor: '#fff',
  }

  const homeOptions = {...commonOptions,headerRight: () => (
    <Button
      onPress={() => {
        database()
        .ref('/users/'+user.user.uid)
        .remove().then(d=>{
          console.log("eliminado");
        }).catch(b=>{
          console.log("error al eliminar");
        })
        auth().signOut().then(()=>console.log("cerror sesi[on"))
      }}
      title="Salir"
    />
  )}

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          (user) ?
          <>
          <Stack.Screen name="MeConectoSinClavos" component={HomeScreen} options={homeOptions}/>
          <Stack.Screen name="Detalle" component={DetalleScreen} options={commonOptions}/>
          <Stack.Screen name="Cuestionario" component={CuestionarioScreen} options={commonOptions}/>
          <Stack.Screen name="Resultado" component={ResultadoScreen} options={commonOptions}/>
          </>
          :
          <>
          <Stack.Screen name="Regístrate" component={RegisterScreen} options={commonOptions}/>
          </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

