import React from 'react';
import classes from './SmallListItem.module.css'
const SmallListItem = ({children}) => {
    return (
        <div className={classes.SmallListItem}>
            {children}
        </div>
    );
};

export default SmallListItem;