import '../Styles/CurrentWeather.css';
import Temperature from './Temperature';
import WeatherIcon from './WeatherIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const CurrentWeather = () => {
    return (
        <div className='current-weather__container'>
            <p>RIGHT NOW</p>
            <div className='current-weather__details'>
                <div className='current-weather__info'>
                    <Temperature />
                    <p className='weather-type'>Light Thunderstorms</p>
                </div>
                <WeatherIcon />
            </div>
            <div className='current-weather__location'>
                <FontAwesomeIcon icon={faLocationArrow} />
                <p className='weather-location'>Dallas, TX</p>
            </div>
        </div>
    )
}

export default CurrentWeather;