import React from 'react';
import {View} from 'react-native';
import Cuestionario from '../Cuestionario/Cuestionario';

export function CuestionarioScreen({navigation}){
    return (
      <View>
        <Cuestionario avanza={()=>navigation.goBack()} ></Cuestionario>
      </View>
    )
  }