import '../Styles/Details.css';
import Temperature from './Temperature';
import DetailsInfo from './DetailsInfo';
import React from 'react';
import { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';

const Details = () => {
    const weatherData = useContext(WeatherContext);

    return (
        <div className='details__container'>
            <div className='details-lowhigh__container'>
                <div className='details-temp'>
                    <Temperature temp={weatherData ? weatherData.min_temp : '0'} />
                    <p className='low-temp'>LOW</p>
                </div>
                <div className='details-temp'>
                    <Temperature temp={weatherData ? weatherData.max_temp : '0'} />
                    <p className='high-temp'>HIGH</p>
                </div>
            </div>

            <DetailsInfo />
            
        </div>
    )
}

export default React.memo(Details);