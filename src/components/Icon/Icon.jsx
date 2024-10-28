import { FaPen, FaRegCircle, FaTimes } from 'react-icons/fa';

function Icon({ name }) {
    const iconStyle = {
        color: '#546e7a', 
        size: '35px'      
    };

    if (name === "circle") {
        return <FaRegCircle color={iconStyle.color} size={iconStyle.size} />;
    } 
    else if (name === "cross") {
        return <FaTimes color={iconStyle.color} size={iconStyle.size} />;
    } 
    else {
        return <FaPen color={iconStyle.color} size={iconStyle.size} />;
    }
}

export default Icon;
