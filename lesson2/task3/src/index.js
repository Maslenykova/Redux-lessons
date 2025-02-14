import { addUser, deleteUser } from './users.actions';
import store from './store';

store.dispatch(addUser({ name: "John", id: 100 })); 
store.dispatch(deleteUser(76)); 

console.log(store.getState());