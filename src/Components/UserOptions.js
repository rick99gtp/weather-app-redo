import { useState } from 'react';
import '../Styles/UserOptions.css';

const UserOptions = () => {
    const [currentOption, setCurrentOption] = useState(0);

    const handleClick = el => {
        setCurrentOption(el);
    };

    return (
        <div className='user-options__container'>
            <div className='user-options__choices'>
                <div onClick={() => handleClick(0)}className={`user-options__option ${currentOption === 0 ? 'active-option' : ''}`}><p>Details</p></div>
                <div onClick={() => handleClick(1)} className={`user-options__option ${currentOption === 1 ? 'active-option' : ''}`}><p>Hourly</p></div>
                <div onClick={() => handleClick(2)} className={`user-options__option ${currentOption === 2 ? 'active-option' : ''}`}><p>10-Day</p></div>
            </div>
        </div>
    )
}

export default UserOptions;