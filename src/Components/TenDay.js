import '../Styles/TenDay.css';
import React from 'react';

const TenDay = () => {

    return (
        <div className='ten-day__container'>
            <div className='ten-day__row'>
                <div></div>
                <div></div>
                <div>LOW</div>
                <div>HIGH</div>
            </div>
            {/* {context ? context.data.map(() => {
                return (
                    <div></div>
                )
            }) : null} */}
            <div className='ten-day__row'>
                <div className='col1'>Today</div>
                <div className='col2'>ICON</div>
                <div className='col3'>50°</div>
                <div className='col4'>60°</div>
            </div>
        </div>
    )
}

export default React.memo(TenDay);