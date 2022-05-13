import React from 'react';
import classes from './InfoIcon.module.css'
const InfoIcon = ({src}) => {
    return (
        <img src={src} className={classes.infoIcon} alt="icon"/>
    );
};

export default InfoIcon;