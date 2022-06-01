import React from 'react';
import classes from './InputName.module.css'
import {useNavigate} from "react-router-dom";
import state from "../../../state/state";
import functions from "../../../functions/functions";
import {observer} from "mobx-react-lite";
import backImage from '../../../image/back.png'
const InputName = observer(({setInputText,inputText,to,...props}) => {
    const router = useNavigate()
    console.log(state.inputValue)
    function backClick(){
        if (to != undefined) {router(to)}
        state.changeOpenMarker(undefined)
        setInputText('')
        state.changeBrowsingOpen(false)
        state.changeInputValue(undefined)
    }
    return (
        <div
            className={classes.inputName}>

            <img
                src={backImage}
                alt="Back"
                style={{width:24,marginRight:10}}
                onClick={() => backClick()}
            />
            <input
                type="text"
                placeholder={
                    functions.notUndef(state.inputValue,'Поиск...')
                }
                className={classes.inputName__input}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onClick={() => {
                    if (to != undefined){state.changeBrowsingOpen(true)}
                }}

            />
        </div>
    );
});

export default InputName;