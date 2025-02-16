import {SET_USER, REMOVE_USER} from './user.actions';

const initialState = {
    user: [],
};

export const userReducer = (state = initialState, action) =>{
       switch(action.type){
        case SET_USER: {
            return {
                ...state,
                user: state.user.concat(action.payload.userData)
            }
        }
        case REMOVE_USER: {
            const newList = state.user.filter(user => user.name !== action.payload.userName);
            return {
                ...state,
                user: newList,

            }
        }
        default:
            return state
       }
}