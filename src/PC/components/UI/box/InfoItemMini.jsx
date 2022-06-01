import React from 'react';
import classes from './InfoItemMini.module.css'
const InfoItemMini = ({children}) => {
    return (
        <div className={classes.infoItem_mini}>
            {children}
        </div>
    );
};

export default InfoItemMini;