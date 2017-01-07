import React, { PropTypes } from 'react';
import LogoImage from '../../images/logo.jpg';
import LogoSmallImage from '../../images/logo-sm.jpg';

export const LogoIconSizes = {
    SMALL: 'SMALL',
    REGULAR: 'REGULAR'
};

const LogoIcon = (props) => {
    const {size} = props;
    
    let icon;
    switch (size) {
        case LogoIconSizes.SMALL:
            icon = LogoSmallImage;
            break;
        default:
            icon = LogoImage;
    }

    return (
        <img src={icon} alt="logo" />
    );
};

LogoIcon.propTypes = {
    size: PropTypes.oneOf(Object.keys(LogoIconSizes))
};

LogoIcon.defaultProps = {
    size: LogoIconSizes.REGULAR
};

export default LogoIcon;
