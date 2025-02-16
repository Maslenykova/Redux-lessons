import { createStore, combineReducers } from 'redux';
import {userReducer} from './user.reducer';
import { productReducer } from './cart.reducer';
import {setLanguageReduser} from './language.reducer';


const appReduser = combineReducers({
    users : userReducer,
    product: productReducer,
    lenguage: setLanguageReduser,
})



const store = createStore(appReduser,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;