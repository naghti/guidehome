import React from 'react';
import classes from './PhotoItem.module.css'
const PhotoItem = ({src,...props}) => {
    return (
        <div className={classes.photoItem} {...props} >
            <img
                src={src}
                alt="image"
                className={classes.photoItem__photo}
            />
        </div>
    );
};

export default PhotoItem;