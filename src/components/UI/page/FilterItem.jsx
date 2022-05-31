import React, {useState} from 'react';
import classes from "../../css/SectionMarkers.module.css";
import state from "../../../state/state";
import {observer} from "mobx-react-lite";

const FilterItem = observer(({text,changeFilter}) => {
    let [active,setActive] = useState(false)
    return (
        <>
            <div
                className={
                    (state.markersFilt == text || state.markersFiltCountry == text) ? classes.sectionMarkers__filterItem_active : classes.sectionMarkers__filterItem
                }
                onClick={() => {
                    setActive(!active)
                    changeFilter(text)
                }}
            >
                <h6 className={classes.sectionMarkers__filterText}>{text}</h6>
            </div>
        </>
    );
})

export default FilterItem;