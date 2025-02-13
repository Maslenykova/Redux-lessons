import { createStore } from 'redux';

const INCREMENT = 'COUNTER/INCREMENT';
const DICREMENT = 'COUNTER/DICREMENT';

export const increment = () => {
    return {
        type : INCREMENT
    }
};

export const dicrement = () => {
    return {
        type: DICREMENT
    }
};

const counterReducer = (state = 0, action) =>{
    switch(action.type){
        case INCREMENT:
            return state + 1;
        case DICREMENT:
            return state - 1;
        default:
            return state;
    }
};

export const store = createStore(counterReducer);

// store.dispatch(increment());
// store.dispatch(dicrement());
// store.dispatch(increment());

