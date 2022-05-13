import React from 'react';
import classes from './Border.module.css'
const Border = ({children,...props}) => {
    return (
        <div className={classes.border} {...props}>
            {children}
        </div>
    );
};

export default Border;