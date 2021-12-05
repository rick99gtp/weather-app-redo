import '../Styles/Temperature.css';
import { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';

const Temperature = () => {
    const weatherData = useContext(WeatherContext);

    return (
        <div className='temperature__container'>
            {weatherData ? weatherData.temp : '0'}°<span>F</span>
        </div>
    )
}

export default Temperature;