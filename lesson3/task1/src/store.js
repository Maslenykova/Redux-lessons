import { createStore, combineReducers } from 'redux';
import {counterReducer} from './counter.reducers';
import {usersReducer} from './users.reducer';

const appReduser = combineReducers({
    counter: counterReducer,
    users : usersReducer,
})



const store = createStore(appReduser);

export default store;