import Details from './Details';
import SevenDay from './SevenDay';

const WeatherDetails = ({currentOption}) => {
    return (
        <>
            {currentOption === 'details' && <Details />}
            {currentOption === 'sevenday' && <SevenDay />}
        </>
    )
}

export default WeatherDetails;