
export const CITY_DATA_RECEIVED = 'CITY_DATA_RECEIVED';


export const cityDataReceived = (cityData) =>{
    return{
        type: CITY_DATA_RECEIVED,
        payload: cityData,
    }
};

const baseUrl = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities";

export const getWeatherData = () => {
    return fetch(baseUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch');
            }
            return response.json();
        })} 


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
