import '../Styles/Temperature.css';

const Temperature = ({temp}) => {

    return (
        <div className='temperature__container'>
            {Math.ceil(temp)}°<span>F</span>
        </div>
    )
}

export default Temperature;