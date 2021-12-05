import '../Styles/CurrentWeather.css';
import Temperature from './Temperature';

const CurrentWeather = () => {
    return (
        <div className='current-weather__container'>
            <p>RIGHT NOW</p>
            <div className='current-weather__info'>
                <Temperature />
            </div>
            <div className='current-weather__icon'>

            </div>
        </div>
    )
}

export default CurrentWeather;