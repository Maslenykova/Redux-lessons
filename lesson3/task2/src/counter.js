import { createStore, combineReducers } from 'redux';

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';

export const increment = () => {
    return {
        type : INCREMENT
    }
};

export const decrement = () => {
    return {
        type: DECREMENT
    }
};

const counterReducer = (state = 0, action) =>{
    switch(action.type){
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

// const appReduser = combineReducers({
//     counter: counterReducer,
// })


export const store = createStore(counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);





