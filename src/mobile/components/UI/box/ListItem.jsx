import React from 'react';
import classes from './ListItem.module.css'
const ListItem = ({children}) => {
    return (
        <div className={classes.listItem}>
            {children}
        </div>
    );
};

export default ListItem;