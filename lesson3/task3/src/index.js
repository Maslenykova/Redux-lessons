import { setUser, removeUser} from './user.actions';
import {addProduct, removeProduct} from './cart.actions';
import {setLanguage} from './language.actions';
import store from './store';

console.log(store.getState()); 

store.subscribe(()=>console.log(store.getState()));

store.dispatch(setUser({ name: 'Anna' })); 
store.dispatch(removeUser()); 

store.dispatch(addProduct({ id: 76, name: 'milk'})); 
store.dispatch(addProduct({ id: 89, name: 'bread'})); 
store.dispatch(removeProduct(89)); 

store.dispatch(setLanguage({language:'jp'})); 