import { SET_USERS, SET_PAGE } from './users.actions';

const initialState = {
    usersList: [],
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
    default:
        return state;
}
};

export default usersReducer;