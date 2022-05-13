import React from 'react';
import classes from './ChangePhoto.module.css'
const ChangePhoto = ({changePhoto}) => {
    return (
        <div className={classes.changePhoto}>
            <div className={classes.changePhoto__changeBtn} onClick={() => changePhoto(-1)}>
                <img
                    className={classes.changePhoto__changeImg}
                    src='https://fonts.gstatic.com/s/i/googlematerialicons/keyboard_arrow_left/v6/white-24dp/2x/gm_keyboard_arrow_left_white_24dp.png'
                />
            </div>
            <div className={classes.changePhoto__changeBtn} onClick={() => changePhoto(+1)}>
                <img
                    className={classes.changePhoto__changeImg}
                    src='https://fonts.gstatic.com/s/i/googlematerialicons/keyboard_arrow_right/v6/white-24dp/2x/gm_keyboard_arrow_right_white_24dp.png'
                />
            </div>
        </div>    );
};

export default ChangePhoto;