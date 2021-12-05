import '../Styles/UserOptions.css';

const UserOptions = ({option, changeOption}) => {

    return (
        <div className='user-options__container'>
            <div className='user-options__choices'>
                <div onClick={() => changeOption(0)}className={`user-options__option ${option === 0 ? 'active-option' : ''}`}><p>Details</p></div>
                <div onClick={() => changeOption(1)} className={`user-options__option ${option === 1 ? 'active-option' : ''}`}><p>Hourly</p></div>
                <div onClick={() => changeOption(2)} className={`user-options__option ${option === 2 ? 'active-option' : ''}`}><p>10-Day</p></div>
            </div>
        </div>
    )
}

export default UserOptions;