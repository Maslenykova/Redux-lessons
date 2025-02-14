import { addUser, deleteUser } from './users.actions';
import store from './store';

const newUser = { id: 1, name: 'John Doe' };

store.dispatch(addUser(newUser)); 
console.log(store.getState()); 

store.dispatch(deleteUser(1)); 
console.log(store.getState());