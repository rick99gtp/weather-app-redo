import '../Styles/CurrentWeather.css';
import Temperature from './Temperature';
import WeatherIcon from './WeatherIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';

const CurrentWeather = ({location}) => {
    const data = useContext(WeatherContext);

    return (
        <div className='current-weather__container'>
            <p>RIGHT NOW</p>
            <div className='current-weather__details'>
                <div className='current-weather__info'>
                    <Temperature temp={data.data[0].temp}/>
                    <p className='weather-type'>{data.data[0].weather.description}</p>
                </div>
                <WeatherIcon icon={data.data[0].weather.icon} />
            </div>
            <div className='current-weather__location'>
                <FontAwesomeIcon icon={faLocationArrow} />
                <p className='weather-location'>{location.city}, {location.state}</p>
            </div>
        </div>
    )
}

export default CurrentWeather;