import React from 'react';
import classes from './VerticalBox.module.css'
const VerticalBox = ({children,...props}) => {
    return (
        <div className={classes.verticalBox} {...props}>
            {children}
        </div>
    );
};

export default VerticalBox;