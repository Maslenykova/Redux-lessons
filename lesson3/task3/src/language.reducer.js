import { SET_LANGUAGE } from "./language.actions";

export const setLanguageReduser = (state = 'en', action) =>{
    switch(action.type){
        case SET_LANGUAGE:
            return {
                language: action.payload.language,
        }
        default:
            return state;
}
}