import React from 'react';
import classes from './AddPhoto.module.css'
const AddPhoto = () => {
    return (
        <a
            target="_blank"
            href='https://quintadb.ru/widgets/cVW4tcGCjcu4kguSo-W6LZ/ddRSklbmjeW57dG8oMFmkT'
            className={classes.addPhoto__link}
        >
            <img
                className={classes.addPhoto__image}
                src={'https://maps.gstatic.com/tactile/unifiedviewer/ic_mod_add_photo.svg'}
            />
        </a>

    )
};

export default AddPhoto;