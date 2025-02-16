import {increment, decrement} from './counter';
import store from './store';

store.subscribe(()=>console.log(store.getState()))

store.dispatch(increment()); 
store.dispatch(decrement()); 
 