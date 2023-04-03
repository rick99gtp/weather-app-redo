import '../Styles/Temperature.css';

const Temperature = ({temp}) => {

    return (
        <div className='temperature__container'>
            {Math.ceil(temp)}<div className="degrees">°</div>
        </div>
    )
}

export default Temperature;