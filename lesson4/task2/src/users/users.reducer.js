
import {ADD_USERS, DELETE_USERS} from './users.action';

const initialState = {
    usersList: [],
};

const usersReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_USERS:{
            return{
                ...state,
                usersList: state.usersList.concat(action.payload),
            }
        }
            
        case DELETE_USERS:{
            const newList = state.usersList.filter(user => user.id !== action.payload);
            return{
                ...state,
                usersList: newList,
            };
        }
                
        default:
            return state;
    }
};

export default usersReducer;