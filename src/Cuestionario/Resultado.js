import React from 'react'
import { View,Text,Button,StyleSheet } from 'react-native';

export default function Resultado(prop){
    return (
        <View style={styles.container}>
            <Text style={styles.t1}>Puntuación:</Text>
            <Text style={styles.t2}>80</Text>
            <Button title="Inicio" onPress={prop.avanza}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#2064AC",
        alignContent:"center",
        justifyContent:"center"
    },
    t1:{
        fontSize:35,
        color:"#fff"
    },
    t2:{
        fontSize:20,
        color:"#F6C015",
        textAlign:"right"
    }
})