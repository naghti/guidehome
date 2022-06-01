import React from 'react';
import classes from './InfoText.module.css'
const InfoText = ({children}) => {
    return (
        <h3 className={classes.infoText}>{children}</h3>
    );
};

export default InfoText;