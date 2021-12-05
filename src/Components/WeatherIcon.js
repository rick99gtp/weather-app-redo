import '../Styles/WeatherIcon.css';
import { useState, useContext, useEffect } from 'react';
import { WeatherContext } from '../WeatherContext';

const WeatherIcon = () => {
    const weatherData = useContext(WeatherContext);
    const [ prefix ] = useState('https://weatherbit.io/static/img/icons/');
    // const [icon, setIcon] = useState('c02n');

    // useEffect(() => {
    //     if(weatherData) {
    //         setIcon(weatherData.weather.icon)
    //     }
    // },[weatherData]);

    return (
        <div className='weather-icon__container'>
            {weatherData ? <img src={`${prefix}${weatherData.weather.icon}.png`} alt="icon" /> : 'Loading...'}
        </div>
    )
}

export default WeatherIcon;