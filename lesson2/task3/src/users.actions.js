
export const ADD_USERS = 'USERS/ADDUSERS ';
export const DELETE_USERS = 'USERS/DELETEUSERS';


export const addUser = (user) =>{
    return{
        type: ADD_USERS,
        payload: user
    }
}

export const deleteUser = (id) =>{
    return{
        type: DELETE_USERS,
        payload: id
    }
}