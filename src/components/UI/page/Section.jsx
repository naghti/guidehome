import React from 'react';
import classes from './Section.module.css'
import {useNavigate} from "react-router-dom";
const Section = ({src,name,section}) => {
    const router = useNavigate()

    return (
        <div
            className={classes.section + ' col-6 col-md-4 col-lg-3'}
            onClick={() => router(`/section/${section}`)}
        >
            <div className={classes.section__imageBox}>
                <img src={src} alt={name} className={classes.section__image}/>
            </div>
            <p className={classes.section__text}>{name}</p>
        </div>
    );
};

export default Section;