import '../Styles/DetailsInfo.css';
import DetailInfoItem from './DetailInfoItem';
import { faWind, faTint, faEye, faCompressAlt, faThermometerEmpty } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';

const DetailsInfo = () => {
    const data = useContext(WeatherContext);

    return (
        <div className='details-info__container'>
            <DetailInfoItem icon={faWind} title="WIND" details={`${data.data.data[0].wind_cdir} ${Math.ceil(data.data.data[0].wind_spd)} MPH`} />
            <DetailInfoItem icon={faTint} title="HUMIDITY" details={`${data.data.data[0].rh}%`} />
            <DetailInfoItem icon={faThermometerEmpty} title="DEW POINT" details={`${Math.ceil(data.data.data[0].dewpt)}°`} />
            {/* Pressure is converted from bar to inch */}
            <DetailInfoItem icon={faCompressAlt} title="PRESSURE" details={`${(data.data.data[0].pres * 0.0295301).toFixed(2)} in`} />
            <DetailInfoItem icon={faEye} title="VISIBILITY" details={`${data.data.data[0].vis} mi`} />
        </div>
    )
}

export default DetailsInfo;