import { SET_LANGUAGE } from "./language.actions";

const initialState = 'en';


export const setLanguageReduser = (state = initialState, action) =>{
    switch(action.type){
        case SET_LANGUAGE:
            return {
                language: action.payload,
        }
        default:
            return state;
}
}