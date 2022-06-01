import React from 'react';
import MarkerPreview from "./MarkerPreview";
import classes from './style/SectionMarkers.module.css'
import state from "../state/state";
import {observer} from "mobx-react-lite";
let SectionMarkers = observer(({sectionMarkers}) => {
    function markersFilter(marker){
        if (state.markersFilter == undefined) {
            return true
        }else{
            return marker['под-раздел'] == state.markersFilter
        }
    }
    return (
        <div className={classes.sectionMarkers__box}>
            <div className={classes.sectionMarkers}>
                {
                    sectionMarkers
                        .filter(marker => markersFilter(marker))
                        .map( marker => {
                        return <MarkerPreview marker={marker}/>
                    })
                }
            </div>
        </div>
    );
});

export default SectionMarkers;