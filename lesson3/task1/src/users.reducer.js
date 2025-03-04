
import {ADD_USERS, DELETE_USERS, UPDATE_USERS} from './users.actions';

const initialState = {
    usersList: [],
};

export const usersReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_USERS:{
            return{
                ...state,
                usersList: state.usersList.concat(action.payload.userData),
            }
        }
            
        case DELETE_USERS:{
            const newList = state.usersList.filter(user => user.id !== action.payload.userId);
            return{
                ...state,
                usersList: newList,
            };
        }
           
            case UPDATE_USERS: {
                const newList = state.usersList.map(user => {
                    if(user.id === action.payload.userId){
                        return{
                            ...user,
                            ...action.payload.userData,
                        }
                    };
                    return user;

                });
                return{
                    ...state,
                    usersList: newList,
                }
            }
               
              
        default:
            return state;
    }
}