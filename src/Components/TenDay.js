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
                <div>LOW</div>
                <div>HIGH</div>
            </div>

            {data.data.map((el, idx) => {
                console.log(el.datetime);
                return (
                    <div className='ten-day__row' key={el.datetime}>
                        <div className='col1'>{idx === 0 ? 'Today' : getDay(el.datetime)}</div>
                        <div className='col2'><img src={`${prefix}${el.weather.icon}.png`} alt="daily-icon"/></div>
                        <div className='col3'>{Math.floor(el.low_temp)}</div>
                        <div className='col4'>{Math.floor(el.high_temp)}</div>
                    </div>
                )
            })}

        </div>
    )
}

export default React.memo(TenDay);