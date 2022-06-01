import React from 'react';
import classes from './OpenPhoto.module.css'

const OpenPhoto = ({src}) => {
    return (
        <img
            src={src}
            className={classes.openPhoto}
            alt={'фото места'}
        />
    );
};

export default OpenPhoto;