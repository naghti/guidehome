import React from 'react';
import classes from './Section.module.css'
import {useNavigate} from "react-router-dom";
import state from "../../../state/state";
const Section = ({section}) => {
    console.log(section.section)
    const router = useNavigate()
    function sectionClick (){
        state.changeInputValue(section['name'])
        router(`section/${section['section']}`)
    }
    return (
        <div
            className={classes.section}
            onClick={() => sectionClick()}
        >
            <img
                src={section['src']}
                alt="icon"
                className={classes.section__image}
            />
            <h5
                className={classes.section__name}
            >
                {section['name']}
            </h5>
        </div>
    );
};

export default Section;