
export const ADD_USERS = 'USERS/ADDUSERS ';
export const DELETE_USERS = 'USERS/DELETEUSERS';
export const UPDATE_USERS = 'USERS/UPDSTE_USERS';


export const addUser = (userData) =>{
    return{
        type: ADD_USERS,
        payload: {
            userData,
        }
    }
}

export const deleteUser = (userId) =>{
    return{
        type: DELETE_USERS,
        payload: {
            userId
        }
    }
}
export const updateUser = (userId, userData) =>{
    return{
        type: UPDATE_USERS,
        payload: {
            userId,
            userData,
        }
    }
}