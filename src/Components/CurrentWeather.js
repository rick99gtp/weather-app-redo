import '../Styles/CurrentWeather.css';
import Temperature from './Temperature';

const CurrentWeather = () => {
    return (
        <div className='current-weather__container'>
            <p>RIGHT NOW</p>
            <div className='current-weather__details'>
                <div className='current-weather__info'>
                    <Temperature />
                    <p className='weather-type'>Light Thunderstorms</p>
                </div>
                <div className='current-weather__icon'>
                    
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;