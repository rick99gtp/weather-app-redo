import './Styles/App.css';
import CurrentWeather from './Components/CurrentWeather';
import UserOptions from './Components/UserOptions';
import WeatherDetails from './Components/WeatherDetails';
import MobileMenu from './Components/MobileMenu';
import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { WeatherContext } from './WeatherContext';

function App() {
  const [location, setLocation] = useState({ city: 'Frisco', state: 'TX' });
  const [weatherData, setWeatherData] = useState(null);
  const [currentOption, setCurrentOption] = useState('details');
  const [currentScreen, setCurrentScreen] = useState(0);
  const [dataReady, setDataReady] = useState(false);

  /* Request the weather data from the location and state */
  const fetchWeatherData = async () => {
    const data = await axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?units=I&days=10&key=${process.env.REACT_APP_API_KEY}&city=${location.city},${location.state}`
    );
    setWeatherData(data);
  }

  /* Once weatherData is received, let the app know the data is ready */
  useEffect(() => {
    if (weatherData) {
      setDataReady(true);
    }
  }, [weatherData]);

  /* When the App mounts, get the weather data */
  useEffect(() => {
    fetchWeatherData();
  }, []);

  /* @TODO - write out a comment here describing what's happening in this method */
  const changeCurrentOption = useCallback((opt) => {
    setCurrentOption(opt)
  }, [setCurrentOption]);

  /* @TODO - write out a comment here describing what's happening in this method */
  const changeCurrentScreen = useCallback((choice) => {
    setCurrentScreen(choice);
  }, [setCurrentScreen]);

  return (
    <div className="App">
      <WeatherContext.Provider value={weatherData}>
        {dataReady 
          ? <><CurrentWeather 
              location={location} />
            <UserOptions 
              option={currentOption} 
              changeOption={changeCurrentOption} />
            <WeatherDetails 
              currentOption={currentOption} /></>
          : <div className="loading-container">
              <div className="loading-weather-data">Loading weather data</div>
            </div>
        }
        <MobileMenu screen={currentScreen} changeScreen={changeCurrentScreen} />
      </WeatherContext.Provider>
    </div>
  );
}

export default App;