import '../Styles/SevenDay.css';
import React from 'react';
import { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';

const SevenDay = () => {
    const data = useContext(WeatherContext);
    const prefix = 'https://weatherbit.io/static/img/icons/';

    const getDay = (date) => {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const newDate = new Date(date);
        const day = newDate.getDay();
        return (days[day]);
    };

    let sevenDayData = data.data.data.map((el, idx) => {
        return (
            <div className='seven-day__row' key={el.datetime}>
                <div className='col-a'>{idx === 0 ? 'Today' : getDay(el.datetime)}</div>
                <div className='col-a col-icon'><img src={`${prefix}${el.weather.icon}.png`} alt="daily-icon"/></div>
                <div className='col-b'>{Math.ceil(el.low_temp)}</div>
                <div className='col-b'>{Math.ceil(el.high_temp)}</div>
            </div>
        )
    });

    return (
        <div className='seven-day__container'>
            <div className='seven-day__row'>
                <div></div>
                <div></div>
                <div className='col-b'>LOW</div>
                <div className='col-b'>HIGH</div>
            </div>
            {sevenDayData}
        </div>
    )
}

export default React.memo(SevenDay);