import { createStore, combineReducers } from 'redux';
import optionReduser from './options/options.reducer';

const rootReducer = combineReducers({
    options: optionReduser,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;