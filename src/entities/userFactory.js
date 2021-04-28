export default class UserFactory {

    static createUser(){
        const objCompetencia = {
            'punteo':0,
            'logros':{
                "escribe":0,
                "comparte":0,
                "invita":0,
                "compite":0
            }
        }
        return {
            usuario:'',
            telefono:'',
            edad:0,
            genero:'',
            ubicacion:'',
            competencias:{
                'sexting':objCompetencia,
                'juegos':objCompetencia,
                'publicidad':objCompetencia,
                'desnudos':objCompetencia,
                'sexual':objCompetencia,
                'exhibicionismo':objCompetencia
            }
        }
    }

    

}