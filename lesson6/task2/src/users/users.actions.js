

export const SHOW_SPINNER = 'SHOW_SPINNER';
export const USER_DATA_RECEVED = 'USER_DATA_RECEVED';

export const showSpinner = () =>{
   return {
    type: SHOW_SPINNER ,
   }
};

export const userDataRecieved = (userData) =>{
    return {
     type: USER_DATA_RECEVED,
     payload: {
        userData
     },
    };
 };

//  export const fetchUserData = (userName) =>{
//     return function(dispatch) {
//         dispatch(showSpinner())
//         getUserData(userName).then(userData =>{
//             dispatch(userDataRecieved(userData));
//            })
//     }
//  }