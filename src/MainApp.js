import { Button,StyleSheet } from 'react-native';
import React,{useState,useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import { HomeScreen, DetalleScreen, CuestionarioScreen, ResultadoScreen,RegisterScreen } from './screens'
import { createStackNavigator } from '@react-navigation/stack'; 
import { NavigationContainer } from '@react-navigation/native';
import {useDispatch} from 'react-redux';

const Stack = createStackNavigator();

export default function MainApp(){

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const dispatch = useDispatch();

    const commonOptions = {
        headerStyle:{
            backgroundColor:"#2064AC"
        },
        headerTintColor: '#fff',
    }
    
    const homeOptions = {...commonOptions,headerRight: () => (
        <Button
            onPress={() => {
            auth().signOut().then(()=>console.log("cerrar sesión"))
            }}
            title="Salir" color="#51A3DA" style={{margin:15}}/>
    )}

    // Handle user state changes
    function onAuthStateChanged(user) {
        console.log("Cambio estado:")
        console.log(user);
        if (initializing) setInitializing(false);
        if(user!=null){
            console.log("poniendo usuario");
            console.log(user.uid);
            dispatch({type:'user/loggedin',payload:user.uid});
        }
        setUser(user);
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
                    (user.uid!="") ?
                        <>
                        <Stack.Screen name="Me Conecto Sin Clavos" component={HomeScreen} options={homeOptions}/>
                        <Stack.Screen name="Detalle" component={DetalleScreen} options={commonOptions}/>
                        <Stack.Screen name="Compite" component={CuestionarioScreen} options={commonOptions}/>
                        <Stack.Screen name="Resultado" component={ResultadoScreen} options={commonOptions}/>
                        </>
                    :
                    <View>
                        <Text>Cargando usuario</Text>
                    </View>
                :
                <>
                <Stack.Screen name="MeConecto Sin Clavos" component={RegisterScreen} options={commonOptions}/>
                </>
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({
    btnCerrar: {
      backgroundColor:"#51A3DA",
      color:"#fff",
      marginRight:5
    }
  });