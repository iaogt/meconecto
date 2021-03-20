import React from 'react';
import {View} from 'react-native';
import Resultado from '../Cuestionario/Resultado';


export function ResultadoScreen({navigation}){
    return (
      <View>
        <Resultado avanza={()=>navigation.popToTop()}></Resultado>
      </View>
    )
  }