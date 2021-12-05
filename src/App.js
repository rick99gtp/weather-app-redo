import './Styles/App.css';
import CurrentWeather from './Components/CurrentWeather';
import UserOptions from './Components/UserOptions';
import Details from './Components/Details';
import Hourly from './Components/Hourly';
import TenDay from './Components/TenDay';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { WeatherContext } from './WeatherContext';

function App() {
  const [location, setLocation] = useState({city: 'Dallas', state: 'TX'});
  const [weatherData, setWeatherData] = useState('');
  
  const fetchWeatherData = async () => {
    const { data } = await axios.get(`https://api.weatherbit.io/v2.0/current?units=I&key=c74b01fb5d114516a2260d9f3fd04907&city=${location.city},${location.state}`);
    console.log(data.data[0]);
    setWeatherData(data.data[0]);
  }

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div className="App">
      <WeatherContext.Provider value={weatherData}>
        <CurrentWeather />
        <UserOptions />
        <Details />
        <Hourly />
        <TenDay />
      </WeatherContext.Provider>
    </div>
  );
}

export default App;