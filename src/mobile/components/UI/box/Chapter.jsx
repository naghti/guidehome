import React from 'react';
import classes from './Chapter.module.css'
import {observer} from "mobx-react-lite";
import state from "../../../state/state";

const Chapter = observer(({name,click,active}) => {
    return (
        <div
            className={ active ? classes.chapter_active : classes.chapter}
            onClick={() => click()}
        >
            <p className={ active ? classes.chapter__name_active : classes.chapter__name}>
                {name}
            </p>
        </div>
    );
});

export default Chapter;