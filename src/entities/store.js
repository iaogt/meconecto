import { configureStore } from '@reduxjs/toolkit';
import activityReducer from './activityReducer';
import userReducer from './userReducer';

const store = configureStore({
    reducer:{
        users:userReducer,
        activities:activityReducer
    }
})

export default store;