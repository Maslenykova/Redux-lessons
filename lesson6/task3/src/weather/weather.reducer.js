import { CITY_DATA_RECEIVED } from './weather.action';

const initialData = {
    cityData: [],
 };

 const cityWetherReducer = (state = initialData, action) =>{
    switch(action.type){
        case CITY_DATA_RECEIVED: {
            return {
                ...state,
                cityData: action.payload,
            }
        }
        default:
        return state;
    }
 };

 export default cityWetherReducer;
