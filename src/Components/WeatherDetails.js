import Details from './Details';
import Hourly from './Hourly';
import TenDay from './TenDay';
import { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';

const WeatherDetails = ({currentOption}) => {
    const data = useContext(WeatherContext);
    return (
        <div>
            {currentOption === 0 ? <Details /> : null}
            <Hourly />
            {currentOption === 2 ? <TenDay /> : null}
        </div>
    )
}

export default WeatherDetails;