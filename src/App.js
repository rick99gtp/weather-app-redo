import './Styles/App.css';
import CurrentWeather from './Components/CurrentWeather';
import UserOptions from './Components/UserOptions';
import WeatherDetails from './Components/WeatherDetails';
import MobileMenu from './Components/MobileMenu';
import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { WeatherContext } from './WeatherContext';

function App() {
  const [location, setLocation] = useState({ city: 'Celina', state: 'TX' });
  const [weatherData, setWeatherData] = useState('');
  const [currentOption, setCurrentOption] = useState(2);
  const [currentScreen, setCurrentScreen] = useState(0);
  const [dataReady, setDataReady] = useState(false);

  const fetchWeatherData = async () => {
    const { data } = await
      axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?units=I&days=10&key=c74b01fb5d114516a2260d9f3fd04907&city=${location.city},${location.state}`);
    setWeatherData(data);
  }

  useEffect(() => {
    if (typeof weatherData !== 'string') {
      setDataReady(true);
    }
  }, [weatherData]);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const changeCurrentOption = useCallback((opt) => {
    setCurrentOption(opt)
  }, [setCurrentOption]);

  const changeCurrentScreen = useCallback((choice) => {
    setCurrentScreen(choice);
  }, [setCurrentScreen]);

  return (
    <div className="App">
      <WeatherContext.Provider value={weatherData}>
        {dataReady ? <CurrentWeather location={location} /> : null}
        {dataReady ? <UserOptions option={currentOption} changeOption={changeCurrentOption} /> : null}
        {dataReady ? <WeatherDetails currentOption={currentOption} /> : null}
        <MobileMenu screen={currentScreen} changeScreen={changeCurrentScreen} />
      </WeatherContext.Provider>
    </div>
  );
}

export default App;