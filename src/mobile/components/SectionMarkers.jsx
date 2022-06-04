import React from 'react';
import MarkerPreview from "./MarkerPreview";
import classes from './style/SectionMarkers.module.css'
import state from "../state/state";
import {observer} from "mobx-react-lite";
import AliceCarousel from 'react-alice-carousel';
let SectionMarkers = observer(({sectionMarkers}) => {
    function markersFilter(marker){
        if ((state.markersFilter == undefined) && (state.markersFiltCountry == undefined)){
            return marker
        }else{
            if((state.markersFilter == undefined) || (state.markersFiltCountry == undefined)){
                return (marker['под-раздел'] == state.markersFilter) || (marker['город'] == state.markersFiltCountry) 
            }
            else{
                return (marker['под-раздел'] == state.markersFilter) && (marker['город'] == state.markersFiltCountry) 
            }
        }
    }
    const onSlideChanged = (e) => {
        console.log(rightMarkers[e.item]['id']);
        state.changeSectionActiveMarker(rightMarkers[e.item]['id'])
    };
    let rightMarkers = sectionMarkers.filter(marker => markersFilter(marker))
    // if( state.markersFilter !== undefined )  state.changeSectionActiveMarker(rightMarkers[0]['id'])
    return (
        <div className={classes.sectionMarkers__box}>
            <div className={classes.sectionMarkers}>
                <AliceCarousel 
                    infinite 
                    disableDotsControls
                    disableButtonsControls
                    onSlideChanged={onSlideChanged}
                >
                    {
                        rightMarkers
                            .map( marker => {
                            return <MarkerPreview marker={marker}/>
                        })
                    }
                </AliceCarousel>

            </div>
        </div>
    );
});

export default SectionMarkers;