import './Styles/App.css';
import CurrentWeather from './Components/CurrentWeather';
import UserOptions from './Components/UserOptions';
import Details from './Components/Details';
import Hourly from './Components/Hourly';
import TenDay from './Components/TenDay';

function App() {
  return (
    <div className="App">
      <CurrentWeather />
      <UserOptions />
      <Details />
      <Hourly />
      <TenDay />
    </div>
  );
}

export default App;