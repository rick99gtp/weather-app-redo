import '../Styles/WeatherIcon.css';
import { useState } from 'react';

const WeatherIcon = ({icon}) => {
    const [ prefix ] = useState('https://weatherbit.io/static/img/icons/');

    return (
        <div className='weather-icon__container'>
            <img src={`${prefix}${icon}.png`} alt="icon" />
        </div>
    )
}

export default WeatherIcon;