import React, {useEffect, useState} from 'react';
import classes from './Input.module.css'
import inputClose from '../../../images/inputClose.png'
const Input = ({setInputText,inputText}) => {
    return (
        <div className={classes.input}>
            <img src="https://sun9-87.userapi.com/s/v1/if2/YKfZcuQ19YvBc1Lt1j8prfO6RR4Nnp7yJvqQefWbgJ7MdWYUTCrQvBsCpvq4F7fbMwGj_ovVl7NTPiR1EWR47ma3.jpg?size=80x80&quality=96&type=album" alt="icon" className={classes.input__icon}/>
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