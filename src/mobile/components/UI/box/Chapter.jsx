import React from 'react';
import classes from './Chapter.module.css'
import {observer} from "mobx-react-lite";
import state from "../../../state/state";

const Chapter = observer(({name}) => {
    let currentFilter = state.markersFilter == name
    return (
        <div
            className={ currentFilter ? classes.chapter_active : classes.chapter}
            onClick={() => state.changeMarkersFilter(name)}
        >
            <p className={ currentFilter ? classes.chapter__name_active : classes.chapter__name}>
                {name}
            </p>
        </div>
    );
});

export default Chapter;