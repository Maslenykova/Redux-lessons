
import {ADD_USERS, DELETE_USERS} from './users.actions';

const initialState = {
    usersList: [],
};

export const usersReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_USERS:
            return{
                ...state,
                usersList: state.usersList.concat(action.payload),
            }
        case DELETE_USERS:
            return{
                ...state,
                usersList: state.usersList.filter(user => user.id !== action.payload),
            }
        default:
            return state;
    }
}