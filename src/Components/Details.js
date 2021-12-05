import '../Styles/Details.css';
import Temperature from './Temperature';
import { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';

const Details = () => {
    const weatherData = useContext(WeatherContext);

    return (
        <div className='details__container'>
            <div className='details-lowhigh__container'>
                <div className='details-temp'>
                    <Temperature temp={weatherData ? weatherData.min_temp : '0'} />
                    <p>LOW</p>
                </div>
                <div className='details-temp'>
                    <Temperature temp={weatherData ? weatherData.max_temp : '0'}/>
                    <p>HIGH</p>
                </div>
            </div>
        </div>
    )
}

export default Details;