import React from 'react';
import {View} from 'react-native';
import Detalle from '../detalle/detalle';

export function DetalleScreen({navigation,route}){
    const {idcomp} = route.params;

    return (
      <View style={{flex:1,backgroundColor:"#246BA6"}}>
        <Detalle comp={idcomp} avanza={()=>navigation.navigate("Compite")}></Detalle>
      </View>
    )
  }
  