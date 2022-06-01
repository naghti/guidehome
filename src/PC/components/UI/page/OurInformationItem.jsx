import React from 'react';
import classes from './OurInformationItem.module.css'
const OurInformationItem = ({item}) => {
    return (
        <a href={item.url} style={{textDecoration:'none'}}>
            <div className={classes.ourInformationItem}>
                <div className={classes.ourInformationItem__imgBox}>
                    <img
                        className={classes.ourInformationItem__img}
                        src={item.img}
                        alt="icon"
                    />
                </div>
                <h3 className={classes.ourInformationItem__text}>{item.title}</h3>
            </div>
        </a>
    );
};

export default OurInformationItem;