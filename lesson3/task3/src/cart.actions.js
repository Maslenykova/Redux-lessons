
export const ADD_PRODUCT = 'USERS/ADD_PRODUCT ';
export const REMOVE_PRODUCT = 'USERS/REMOVE_PRODUCT';



export const addProduct = (productData) =>{
    return{
        type: ADD_PRODUCT,
        payload: {
            productData,
        }
    }
}

export const removeProduct = (productId) =>{
    return{
        type: REMOVE_PRODUCT,
        payload: {
            productId
        }
    }
}
