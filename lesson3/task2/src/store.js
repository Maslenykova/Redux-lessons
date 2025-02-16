import { createStore, combineReducers } from 'redux';
import {counterReducer} from './counter';


const appReduser = combineReducers({
    counter: counterReducer,
})


const store = createStore(appReduser,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;