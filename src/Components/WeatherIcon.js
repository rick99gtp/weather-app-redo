import '../Styles/WeatherIcon.css';
import { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';


const WeatherIcon = () => {
    const weatherData = useContext(WeatherContext);
    const icon = 'https://weatherbit.io/static/img/icons/';

    return (
        <div className='weather-icon__container'>
            <img src={`${icon}${weatherData.weather.icon}.png`} alt="icon" />
        </div>
    )
}

export default WeatherIcon;