import React from 'react';
import classes from './InfoIconMini.module.css'
const InfoIconMini = ({src}) => {
    return (
        <img src={src} className={classes.infoIconMini} alt="icon"/>
    );
};

export default InfoIconMini;