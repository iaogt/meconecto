import React from 'react';
import { View, FlatList,Text,StyleSheet,ImageBackground,TouchableOpacity } from 'react-native';

const lista = [
    {
        id:"a",
        title:'Sexting',
        img:"https://meconectosinclavos.awelp.com/wp-content/uploads/2020/12/video-1-sexting.jpg"
    },
    {
        id:"b",
        title:'Juegos Peligrosos',
        img:"https://meconectosinclavos.awelp.com/wp-content/uploads/2020/12/Video-3-los-juegos-en-linea-son-peligrosos.jpg"

    },
    {
        id:"c",
        title:'Publicidad',
        img:"https://meconectosinclavos.awelp.com/wp-content/uploads/2020/12/Video-4-privacidad-y-control-parental.jpg"
    },
    {
        id:"d",
        title:'Desnudos',
        img:"https://meconectosinclavos.awelp.com/wp-content/uploads/2020/12/Video-5-alguien-me-presiona-para-enviar-ma%CC%81s-fotos-sin-ropa.jpg"
    },
    {
        id:"e",
        title:'Agresión Sexual',
        img:"https://meconectosinclavos.awelp.com/wp-content/uploads/2020/12/agresion-sexual-final.jpg"
    },
    {
        id:"f",
        title:'Exhibicionismo',
        img:"https://meconectosinclavos.awelp.com/wp-content/uploads/2020/12/exhibicion-sexual-final.jpg"

    }
];

const lista2 = [
    {
        id:"av",
        title:'Alta Verapaz',
        points:100
    },
    {
        id:"bv",
        title:'Baja Verapaz',
        points:100
    },
    {
        id:"cc",
        title:'Chiquimula',
        points:90
    }
]

const Item = ({title,img,avanza})=>(
    <TouchableOpacity
    onPress={avanza}>
    <View style={styles.item1}>
            <ImageBackground source={{uri:img}} style={styles.img1}>
            <View style={styles.b1}>
                <View style={{flex:0.7}}>
                    <Text style={styles.t1}>{title}</Text>
                </View>
                <View style={{flex:0.3,alignContent:"flex-end"}}>
                    <Text style={styles.t2}>{0}</Text>
                </View>
            </View>
            </ImageBackground>
    </View>
    </TouchableOpacity>
)

const Item2 = ({title,points})=>(
    <TouchableOpacity>
    <View>
        <View style={{flexDirection:'row'}}>
            <View style={{flex:0.7}}>
                <Text>{title}</Text>
            </View>
            <View style={{flex:0.3,alignContent:"flex-end"}}>
                <Text>{points}</Text>
            </View>
        </View>
    </View>
    </TouchableOpacity>
)

export default class Listado extends React.Component{

    constructor(props){
        super(props);
        this.state = { selView:1 };
        this.selectListado = this.selectListado.bind(this);
        this.selectRanking = this.selectRanking.bind(this);
    }

    renderizable = ({item}) => (
        <Item title={item.title} img={item.img} avanza={this.props.avanzar}/>
    );

    renderizable2 = ({item}) => (
        <Item2 title={item.title} points={item.points}/>
    );

    selectListado(){
        this.setState({selView:1});
    }

    selectRanking(){
        this.setState({selView:2});
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.tabis}>
                        <View style={(this.state.selView==1) ? [styles.tabi,styles.selectedtab] : styles.tabi}>
                        <TouchableOpacity onPress={this.selectListado}>
                            <Text style={styles.tabitxt}>Competencias</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={(this.state.selView==2) ? [styles.tabi,styles.selectedtab] : styles.tabi}>
                        <TouchableOpacity onPress={this.selectRanking}>
                            <Text style={styles.tabitxt}>Ranking</Text>
                            </TouchableOpacity>
                        </View>
                </View>
                {
                    (this.state.selView==1) ?
                <FlatList
                    data={lista}
                    renderItem={this.renderizable}
                    keyExtractor={item=>item.id}
                    />
                    :
                    <FlatList
                    data={lista2}
                    renderItem={this.renderizable2}
                    keyExtractor={item=>item.id}
                    />

                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabis:{
        flexDirection:'row',
        height:40
    },
    tabi:{
        flex:0.5,
        flexDirection:"column",
        alignItems:"center"
    },
    tabitxt:{
        paddingTop:10,
        textAlign:'center'
    },
    selectedtab:{
        borderBottomColor:"#F6C015",
        borderBottomWidth:2
    },
    container:{
        flex:1,
        marginLeft:3,
        marginRight:3,
    },
    img1:{
        flex:1,
        resizeMode:"cover",
        justifyContent:"flex-end"
    },
    item1:{
        height:200,
        marginTop:7

    },
    tt1:{
        fontSize:25,
        color:"#2064AC",
        marginTop:10,
        marginBottom:10
    },
    t1:{
      color:"#F6C015",
      opacity:1,
      fontSize:20,
      fontFamily:"DaysOne-Regular"
    },
    t2:{
        color:"#fff",
        opacity:1,
        fontSize:25,
        textAlign:"right",
        fontFamily:"normal"
      },
    b1:{
        backgroundColor: "#2064AC",
        opacity:0.9,
        height:50,
        flexDirection:"row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2
    }
});