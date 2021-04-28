const initialstate = {
    userid:"",
    data:{}
}
export default function userReducer(state=initialstate,action) {
    switch(action.type){
        case "user/loggedin":{
            return {
                ...state,
                userid:action.payload
            }
            break;
        }
        case "user/gotdata":{
            return {
                ...state,
                data:action.payload
            }
            break;
        }
        case "user/endsurvey":{
            return {
                ...state,
                data:{
                    ...state.data,
                    competencias:{
                        ...state.data.competencias,
                        ...action.payload
                    }
                }
            }
        }

        default:
            return state;
    }
}