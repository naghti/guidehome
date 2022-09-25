import React, {useEffect, useState} from 'react';
import classes from './style/Loader.module.css'
import image from '../image/loader.png'
const Loader = () => {
    return (
        <div className={classes.loader}>
            {/* <img src={image} className={classes.loader__image}/> */}
        </div>
    );
};

export default Loader;