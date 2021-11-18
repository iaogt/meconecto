import database from '@react-native-firebase/database';


export default class UserEntity {
    static loadUser(userid){
        console.log("Cargara usuario:");
        console.log(userid);
        return new Promise((resolve,reject)=>{
            database().ref('/users/'+userid)
            .once('value')
            .then(snap=>{
                console.log("Se cargo la data del usuario, es esta:");
                console.log(snap.val());
                resolve(snap.val())
            })
            .catch(e=>{
                console.log("Error:");
                console.log(e);
                reject(e);
            })
        });
    }

    static createUser(userid,data){
        return new Promise((resolve,reject)=>{
            database()
            .ref('/users/'+userid)
            .set(data)
            .then((d) =>{
                resolve(true)
            })
            .catch(()=>{
                reject(false);
            })
        })
    }

    static deleteUser(){
        return new Promise((resolve,reject)=>{
            database()
            .ref('/users/'+user.uid)
            .remove().then(d=>{
            console.log("eliminado");
            resolve(true);
            }).catch(b=>{
            console.log("error al eliminar");
            resolve(false);
            })
        })
    }

    static updateCompetitions(userid,competitionsData){
        return database().ref('/users/'+userid).set(competitionsData)
    }

    /*
        Sorts and filters data
     */
    static getRanking(){
        let collRank = {};
        return new Promise((resolve,reject)=>{
            let dbRef = database().ref("users")
            dbRef.orderByKey().on("value",function(snapshot){ 
                let data2 = snapshot.val();
                let datos = Object.keys(data2).map(ky=>{
                    let data = data2[ky];
                    let userPoints=0;
                    if(data['competencias']!=undefined){
                        let k = Object.keys(data['competencias']);
                        userPoints = k.map(ke=>(data['competencias'][ke]['punteo']!=undefined) ? data['competencias'][ke]['punteo'] : 0).reduce((acc,i)=>acc+i,0);
                    }
                    if(data['ubicacion']!=""){
                        let arrPoints = collRank[data['ubicacion']];
                        if(arrPoints==undefined){
                            arrPoints=userPoints;
                        }else{
                            arrPoints = arrPoints + userPoints;
                        }
                        collRank[data['ubicacion']]=arrPoints;
                    }
                })
                resolve(collRank);
            })           
        });
    }
}