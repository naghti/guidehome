import React from 'react';
import classes from './Header.module.css'
import {useNavigate} from "react-router-dom";
import backImage from '../../../image/back.png'
import searchImage from '../../../image/search.png'
import state from "../../../state/state";
const Header = ({name,route}) => {
    const router = useNavigate()
    function back(){
        state.changeOpenMarker(undefined)
        router(route)
    }
    return (
        <div className={classes.header}>
            <img
                src={backImage}
                alt="back"
                className={classes.header__icon}
                onClick={() => back()}
            />
            <p className={classes.header__name}>
                {name}
            </p>
            <img
                src={searchImage}
                alt="search"
                className={classes.header__icon}
                onClick={() => state.changeBrowsingOpen(true)}
            />
        </div>
    );
};

export default Header;