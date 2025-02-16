
export const ADD_PRODUCT = 'USERS/ADD_PRODUCT ';
export const DELETE_PRODUCT = 'USERS/DELETE_PRODUCT';



export const addProduct = (productData) =>{
    return{
        type: ADD_PRODUCT,
        payload: {
            productData,
        }
    }
}

export const deleteProduct = (productId) =>{
    return{
        type: DELETE_PRODUCT,
        payload: {
            productId
        }
    }
}
