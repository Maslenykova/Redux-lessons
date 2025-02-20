
export const ADD_USERS = 'USERS/ADDUSERS';
export const DELETE_USERS = 'USERS/DELETEUSERS';

export const addUser = (userData) =>{
    return{
        type: ADD_USERS,
        payload: userData,
    }
};

export const deleteUser = (userId) =>{
    return{
        type: DELETE_USERS,
        payload: userId
    }
};
