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
    // const data = await axios.get(
    //   `https://api.weatherbit.io/v2.0/forecast/daily?units=I&days=10&key=${process.env.REACT_APP_API_KEY}&city=${location.city},${location.state}`
    // );
    /* Test data for Current Weather 'Details' */
    const data = {
      data: {
        city_name: "Frisco",
        country_code: "US",
        data: [
          { app_max_temp: 91.6,
            app_min_temp: 62.2,
            clouds: 13,
            clouds_hi: 7,
            clouds_mid: 4,
            datetime: "2023-04-03",
            dewpt: 61.8,
            high_temp: 93.9,
            low_temp: 71.2,
            max_dhi: null,
            max_temp: 93.9,
            min_temp: 62.2,
            moon_phase: 0.970267,
            moon_phase_lunation: 0.45,
            moonrise_ts: 1680561651,
            moonset_ts: 1680521816,
            ozone: 276.4,
            pop: 0,
            precip: 0,
            pres: 979.8,
            rh: 63,
            slp: 1003.6,
            snow: 0,
            snow_depth: 0,
            sunrise_ts: 1680523993,
            sunset_ts: 1680569390,
            temp: 77,
            ts: 1680505260,
            uv: 8.9,
            valid_dateE: "2023-04-03",
            vis: 8.8,
            weather: {
              code: 801,
              description: "Few clouds",
              icon: "c02d"
            },
            wind_cdir: "S",
            wind_cdir_full: "south",
            wind_dir: 190,
            wind_gust_spd: 23.9,
            wind_spd: 15
          }
        ],
        lat: "33.15067",
        lon: "-96.82361",
        state_code: "TX",
        timezone: "America/Chicago"
      }
    };
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