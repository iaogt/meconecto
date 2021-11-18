import React from 'react';
import {View} from 'react-native';
import Cuestionario from '../Cuestionario/Cuestionario';

export function CuestionarioScreen({navigation}){
    return (
      <View style={{backgroundColor:"#fff",flex:1}}>
        <Cuestionario avanza={()=>navigation.goBack()} ></Cuestionario>
      </View>
    )
  }