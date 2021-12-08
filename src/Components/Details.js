import '../Styles/Details.css';
import Temperature from './Temperature';
import DetailsInfo from './DetailsInfo';
import React from 'react';
import { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';

const Details = () => {
    const data = useContext(WeatherContext);

    return (
        <div className='details__container'>
            <div className='details-lowhigh__container'>
                <div className='details-temp'>
                    <Temperature temp={data.data[0].min_temp} />
                    <p className='low-temp'>LOW</p>
                </div>
                <div className='details-temp'>
                    <Temperature temp={data.data[0].max_temp} />
                    <p className='high-temp'>HIGH</p>
                </div>
            </div>

            <DetailsInfo />
            
        </div>
    )
}

export default React.memo(Details);