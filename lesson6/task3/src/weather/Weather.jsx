import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { fetchCityData } from './weather.action';
import { getWeatherData } from './weather.action';
import { citiesDataSelector } from './weather.selectors';

const Weather = ({ cities,  getWeatherData }) => {
    useEffect(()=>{
        getWeatherData()
    }, [ getWeatherData])
   
    return (
        <main className="weather">
            <h1 className="weather__title">Weather data</h1>
            <ul className="cities-list">
                {
                    cities.map(city => (
                        <li className="city" key={city.id}>
                            <span className="city__name">{city.name}</span>
                            <span className="city__temperature">{city.temperature} F</span>
                        </li>
                    ))
              
                }
            </ul>
        </main>
    );
};

Weather.propTypes = {
    cities: PropTypes.array.isRequired,
    getWeatherData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    cities: citiesDataSelector(state),
});

const mapDispatchToProps = {
    getWeatherData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);