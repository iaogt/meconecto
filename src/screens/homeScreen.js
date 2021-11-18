import React,{ useState,useEffect } from 'react';
import { Modal, StyleSheet, View,StatusBar } from 'react-native';
import Listado from '../listado/listado';
import UserEntity from '../entities/userEntity';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import FormularioUsuarioNuevo from '../formulariousuarionuevo/formulariousuarionuevo';


export function HomeScreen({navigation}){
  
    const [modalvisible,setModalVisible] = useState(false);
    const quid = state => state.users;
    const iuid = useSelector(quid);
    const [userdata,setData] = useState(null);
    const dispatch = useDispatch();


    const loadUser = ()=>{
      if(iuid.userid!=""){
        console.log("cargando data de usuario");
        UserEntity.loadUser(iuid.userid)
        .then((data)=>{
            if(data!=null){
                console.log(data);
                setData(data);
                dispatch({type:'user/gotdata',payload:data});
            }else{
               setModalVisible(true);
            }
        })
        .catch(e=>{
        })
      }else{
          console.log("error de autenticación de usuario");
      }
    }


    useEffect(()=>{
      loadUser();
      const unsubscribe = navigation.addListener("focus",()=>{ 
          loadUser();
      })
    },[navigation])

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#16467A" barStyle="dark-content" hidden={false}></StatusBar>
        <Listado avanzar={(i)=>navigation.navigate('Detalle',{idcomp:i})} datosusuarios={userdata}></Listado>
        <Modal visible={modalvisible} onRequestClose={()=>{}}>
            <FormularioUsuarioNuevo userid={iuid.userid} onregister={()=>setModalVisible(false)}></FormularioUsuarioNuevo>
        </Modal>
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
  