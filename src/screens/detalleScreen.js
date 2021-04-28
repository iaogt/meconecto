import React from 'react';
import {View} from 'react-native';
import Detalle from '../detalle/detalle';

export function DetalleScreen({navigation}){
    return (
      <View>
        <Detalle avanza={()=>navigation.navigate("Compite")}></Detalle>
      </View>
    )
  }
  