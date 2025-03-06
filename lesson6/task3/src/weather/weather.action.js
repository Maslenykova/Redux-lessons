import { getWeatherData  } from './weather.geteway';

export const CITY_DATA_RECEIVED = 'CITY_DATA_RECEIVED';


export const cityDataReceived = (cityData) =>{
    return{
        type: CITY_DATA_RECEIVED,
        payload: cityData,
    }
};


export const fetchCityData = () => {
    return function (dispatch) {
        getWeatherData().then(cityData => {
            if (Array.isArray(cityData)) {
                dispatch(cityDataReceived(cityData));
            } else {
                console.error("Invalid city data received:", cityData);
            }
        });
    };
};
