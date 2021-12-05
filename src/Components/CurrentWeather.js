import '../Styles/CurrentWeather.css';
import Temperature from './Temperature';
import WeatherIcon from './WeatherIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';

const CurrentWeather = () => {
    const weatherData = useContext(WeatherContext);

    return (
        <div className='current-weather__container'>
            <p>RIGHT NOW</p>
            <div className='current-weather__details'>
                <div className='current-weather__info'>
                    <Temperature />
                    <p className='weather-type'>{weatherData ? weatherData.weather.description : ''}</p>
                </div>
                <WeatherIcon />
            </div>
            <div className='current-weather__location'>
                <FontAwesomeIcon icon={faLocationArrow} />
                <p className='weather-location'>{weatherData ? weatherData.city_name : 'city'}, {weatherData ? weatherData.state_code : 'state'}</p>
            </div>
        </div>
    )
}

export default CurrentWeather;