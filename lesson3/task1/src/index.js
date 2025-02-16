import { addUser, deleteUser, updateUser } from './users.actions';
import {increment, decrement, reset} from './counter.actions';
import store from './store';

store.subscribe(()=>console.log(store.getState()))

store.dispatch(increment()); 
store.dispatch(decrement()); 
store.dispatch(increment()); 
store.dispatch(increment()); 
store.dispatch(reset()); 

store.dispatch(deleteUser(1)); 

store.dispatch(addUser({ id: 1, name: 'John' })); 
store.dispatch(addUser({ id: 2, name: 'Anna' })); 
store.dispatch(updateUser(1, {name: 'John Doe', age: 25 })); 
store.dispatch(deleteUser(2)); 
