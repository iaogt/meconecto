import userReducer from './userReducer';
import combineRducers from 'redux';

const rootReducer = combineReducers({
    users:userReducer
})

export default rootReducer;