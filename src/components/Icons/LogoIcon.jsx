import React, { PropTypes } from 'react';
import Logo from '../../images/logo.jpg';
import SmallLogo from '../../images/logo-sm.jpg';

export const LogoIconSizes = {
    SMALL: 'SMALL',
    REGULAR: 'REGULAR'
};

const LogoIcon = (props) => {
    const {size} = props;
    
    let icon;
    switch (size) {
        case LogoIconSizes.SMALL:
            icon = SmallLogo;
            break;
        default:
            icon = Logo;
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
