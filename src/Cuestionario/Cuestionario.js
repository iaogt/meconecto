import React from 'react';
import { StyleSheet,View,Text,Button } from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';

const data = [
    {
        label:'Chantaje'
    },
    {
        label:'Privacidad'
    }
]

export default function Cuestionario(props){
    return (
        <View>
            <Text style={styles.pregunta}>¿Cuál es el mayor peligro del sexting?</Text>
            <RadioButtonRN
                data={data}
            />
            <Button title="Siguiente" onPress={props.avanza}/>
        </View>
    )
}

const styles = StyleSheet.create({
    pregunta:{
        fontSize:25
    }
})