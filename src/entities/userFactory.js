class UserFactory {
    static createUser(){
        return {
            usuario:'',
            edad:0,
            genero:'',
            ubicacion:'',
            competencias:{},
            logros:{}
        }
    }
}