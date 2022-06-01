import React from 'react';
import classes from './InfoItem.module.css'
const InfoItem = ({children}) => {
    return (
        <div className={classes.infoItem}>
            {children}
        </div>
    );
};

export default InfoItem;