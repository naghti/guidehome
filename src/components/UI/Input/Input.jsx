import React, {useEffect, useState} from 'react';
import classes from './Input.module.css'
import inputClose from '../../../images/inputClose.png'
const Input = ({setInputText,inputText}) => {
    return (
        <div className={classes.input}>
            <img src="https://img.icons8.com/ultraviolet/80/000000/google-maps-new.png" alt="icon" className={classes.input__icon}/>
            <input
                type="text"
                className={classes.input__input}
                placeholder={'Поиск'}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <img
                src={inputClose}
                alt="iconClose"
                className={inputText.length == 0 ? 'd-none' : classes.input__close}
                onClick={() => setInputText('')}
            />
        </div>
    );
};

export default Input;