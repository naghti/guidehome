import React from 'react';
import classes from './BlueButton.module.css'
const BlueButton = ({children,...props}) => {
    return (
        <div className={classes.button} {...props}>
            <h4 className={classes.button__text}>{children}</h4>
        </div>
    );
};

export default BlueButton;