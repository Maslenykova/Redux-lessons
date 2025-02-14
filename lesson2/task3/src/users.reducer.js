
import {ADD_USERS, DELETE_USERS} from './users.actions';

const initialState = {
    users: [
        { name: 'Sarah', id: 76 },
        { name: 'Anna', id: 78 }
    ]
};

export const usersReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_USERS:
            return{
                ...state,
               users: [...state.users, action.payload]
            }
        case DELETE_USERS:
            return{
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            }
        default:
            return state;
    }
}