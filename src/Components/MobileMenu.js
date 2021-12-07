import '../Styles/MobileMenu.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faListUl, faPlus, faThermometerThreeQuarters } from '@fortawesome/free-solid-svg-icons';

const MobileMenu = ({ screen, changeScreen }) => {
    return (
        <div className='mobile-menu__container'>
            <div className={`mobile-menu__icon ${screen === 0 ? 'active-menu' : ''}`} onClick={() => changeScreen(0)}>
                <FontAwesomeIcon icon={ faThermometerThreeQuarters } size="2x"/>
                <p className='mobile-menu__title'>Forecast</p>
            </div>
            <div className={`mobile-menu__icon ${screen === 1 ? 'active-menu' : ''}`} onClick={() => changeScreen(1)} >
                <FontAwesomeIcon icon={ faGlobe } size="2x"/>
                <p className='mobile-menu__title'>Map</p>
            </div>
            <div className={`mobile-menu__icon ${screen === 2 ? 'active-menu' : ''}`} onClick={() => changeScreen(2)}>
                <FontAwesomeIcon icon={ faListUl } size="2x"/>
                <p className='mobile-menu__title'>Your Locations</p>
            </div>
            <div className={`mobile-menu__icon ${screen === 3 ? 'active-menu' : ''}`} onClick={() => changeScreen(3)}>
                <FontAwesomeIcon icon={ faPlus } size="2x"/>
                <p className='mobile-menu__title'>Add New</p>
            </div>
        </div>
    )
}

export default React.memo(MobileMenu);