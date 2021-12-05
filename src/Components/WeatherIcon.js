import '../Styles/WeatherIcon.css';

// TEMPORARY AFTER THIS LINE
const icon = 'https://weatherbit.io/static/img/icons/c02d.png';

const WeatherIcon = () => {
    return (
        <div className='weather-icon__container'>
            <img src={icon} alt="icon" />
        </div>
    )
}

export default WeatherIcon;