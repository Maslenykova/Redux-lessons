import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import  thunk  from 'redux-thunk';
import TasksReducer from './tasks/tasks.reducer';

const reducer = combineReducers({
    tasks: TasksReducer, 
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk),
    )
);

export default store;