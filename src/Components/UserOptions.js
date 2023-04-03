import React from 'react';
import '../Styles/UserOptions.css';

const UserOptions = ({option, changeOption}) => {

    return (
        <div className='user-options__container'>
            <div className='user-options__choices'>
                <div onClick={() => changeOption('details')} className={`user-options__option ${option === 'details' ? 'active-option' : ''}`}><p>Details</p></div>
                <div onClick={() => changeOption('sevenday')} className={`user-options__option ${option === 'sevenday' ? 'active-option' : ''}`}><p>7-Day</p></div>
            </div>
        </div>
    )
}

export default React.memo(UserOptions);