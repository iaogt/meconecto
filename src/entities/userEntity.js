import database from '@react-native-firebase/database';


export default class UserEntity {
    static loadUser(userid){
        console.log("Cargara usuario:");
        console.log(userid);
        return new Promise((resolve,reject)=>{
            database().ref('/users/'+userid)
            .once('value')
            .then(snap=>{
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
}