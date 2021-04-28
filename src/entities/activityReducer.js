const initialstate = {
    selected:-1,
    dataCompetencia:{},
    resultado:{}
}
export default function activityReducer(state=initialstate,action) {
    switch(action.type){
        case "activity/selected":{
            return {
                ...state,
                selected:action.payload
            }
        }
        case "activity/competencia":{
            return {
                ...state,
                dataCompetencia:action.payload
            }
        }
        default:
            return state;
    }
}