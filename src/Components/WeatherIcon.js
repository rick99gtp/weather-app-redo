import '../Styles/WeatherIcon.css';
import { useState, useContext } from 'react';
import { WeatherContext } from '../WeatherContext';

const WeatherIcon = () => {
    const weatherData = useContext(WeatherContext);
    const [ prefix ] = useState('https://weatherbit.io/static/img/icons/');

    return (
        <div className='weather-icon__container'>
            {weatherData ? <img src={`${prefix}${weatherData.weather.icon}.png`} alt="icon" /> : 'Loading...'}
        </div>
    )
}

export default WeatherIcon;