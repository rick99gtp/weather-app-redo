import '../Styles/TenDay.css';
import React from 'react';
import { useState, useContext } from 'react';
import { WeatherContext } from '../WeatherContext';

const TenDay = () => {
    const data = useContext(WeatherContext);
    const [ prefix ] = useState('https://weatherbit.io/static/img/icons/');

    const getDay = (date) => {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const newDate = new Date(date);
        const day = newDate.getDay();
        return (days[day]);
    };

    return (
        <div className='ten-day__container'>
            <div className='ten-day__row'>
                <div></div>
                <div></div>
                <div className='col-b'>LOW</div>
                <div className='col-b'>HIGH</div>
            </div>

            {data.data.data.map((el, idx) => {
                return (
                    <div className='ten-day__row' key={el.datetime}>
                        <div className='col-a'>{idx === 0 ? 'Today' : getDay(el.datetime)}</div>
                        <div className='col-a col-icon'><img src={`${prefix}${el.weather.icon}.png`} alt="daily-icon"/></div>
                        <div className='col-b'>{Math.floor(el.low_temp)}</div>
                        <div className='col-b'>{Math.floor(el.high_temp)}</div>
                    </div>
                )
            })}

        </div>
    )
}

export default React.memo(TenDay);