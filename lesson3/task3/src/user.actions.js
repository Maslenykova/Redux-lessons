export const SET_USER = 'USERS/SET_USER';
export const REMOVE_USER = 'USERS/REMOVE_USER';


export const setUser = (user) =>{
    return{
        type: SET_USER,
        payload: {
             user,
    }
    }
}

export const removeUser = () =>{
    return{
        type: REMOVE_USER,
        
    }
}