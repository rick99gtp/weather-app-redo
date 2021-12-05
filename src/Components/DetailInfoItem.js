import '../Styles/DetailInfoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DetailInfoItem = ({ title, icon, details }) => {

    return (
        <div className='details-info-item__container'>
            <div className='details-info-icon'>
                    <FontAwesomeIcon icon={icon} size="2x" />
                </div>
                <div className='details-info-specifics'>
                    <div className='details-info-title'>
                        {title}
                    </div>
                    <div className='details-info-data'>
                        {details}
                    </div>
                </div>
        </div>
    )
}

export default DetailInfoItem;