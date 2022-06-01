import React from 'react';
import classes from './Input.module.css'
import state from "../../../state/state";
const Input = ({style}) => {
    return (
        <div className={classes.input} style={style}>
            <img
                src="https://sun9-87.userapi.com/s/v1/if2/YKfZcuQ19YvBc1Lt1j8prfO6RR4Nnp7yJvqQefWbgJ7MdWYUTCrQvBsCpvq4F7fbMwGj_ovVl7NTPiR1EWR47ma3.jpg?size=80x80&quality=96&type=album" alt="icon"
                className={classes.input__image}
            />
            <p
                className={classes.input__input}
                onClick={() => state.changeBrowsingOpen(true)}
            >
                Поиск...
            </p>
            <div className={classes.input__additionally}>
                <img
                    src="https://sun4-12.userapi.com/impf/6K_sPNGiicCHWmpXUiqHGXIi0yGb52fURAnQyw/wDRoZvD9fOU.jpg?size=80x80&quality=96&sign=927f1b26f0e3e8ae86a12cde4bd1ffdd&type=album"
                    className={classes.input__imageSettings}
                    onClick={() => state.changeSetting(true)}
                />
            </div>
        </div>
    );
};

export default Input;