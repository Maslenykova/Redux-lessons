import { SET_USERS, SET_PAGE, GO_NEXT, GO_PREV } from './users.actions';
import { users } from './users';

const initialState = {
    usersList: users,
    currentPage: 0,
  };

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_USERS:
        return {
            ...state,
            usersList: action.payload,
        };
    case SET_PAGE:
        return {
            ...state,
            currentPage: action.payload,
        };
    case GO_NEXT:
        return {
        currentPage: state.currentPage + 1
    }
    case GO_PREV: 
    return{
        currentPage: state.currentPage - 1
    }
    
    default:
        return state;
}
};

export default usersReducer;