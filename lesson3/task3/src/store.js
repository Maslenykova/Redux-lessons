import { createStore, combineReducers } from 'redux';
import {setLanguageReduser} from './language.reducer';
import {userReducer} from './user.reducer';
import { productReducer } from './cart.reducer';


const appReduser = combineReducers({
    language: setLanguageReduser,
    user : userReducer,
    cart: productReducer,
})



const store = createStore(appReduser,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;