import '../Styles/DetailsInfo.css';
import DetailInfoItem from './DetailInfoItem';
import { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';
import { faWind, faTint, faEye, faCompressAlt, faThermometerEmpty } from '@fortawesome/free-solid-svg-icons';

const DetailsInfo = () => {
    const weatherData = useContext(WeatherContext);

    return (
        <div className='details-info__container'>
            <DetailInfoItem icon={faWind} title="WIND" details={weatherData ? `${weatherData.wind_cdir} ${Math.floor(weatherData.wind_spd)} MPH` : ''}/>
            <DetailInfoItem icon={faTint} title="HUMIDITY" details={weatherData ? `${weatherData.rh}%` : ''} />
            <DetailInfoItem icon={faThermometerEmpty} title="DEW POINT" details={weatherData ? `${Math.floor(weatherData.dewpt)}°` : ''} />
            <DetailInfoItem icon={faCompressAlt} title="PRESSURE" details={weatherData ? `${(weatherData.pres * 0.0295301).toFixed(2)} in` : ''} />
            <DetailInfoItem icon={faEye} title="VISIBILITY" details={weatherData ? `${weatherData.vis} mi` : ''} />
        </div>
    )
}

export default DetailsInfo;