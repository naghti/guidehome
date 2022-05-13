import React, {useState} from 'react';
import classes from './css/SectionMarkers.module.css'
import FilterItem from "./UI/page/FilterItem";
import MarkerPreview from "./UI/page/MarkerPreview";
import Search from "./Search";
import state from "../state/state";

const SectionMarkers = ({markers,to}) => {
    let subsections = new Set();
    markers.map(marker => {
        subsections.add(marker['под-раздел'])
    })
    let subsectionsArr = []
    for (let subsection of subsections) subsectionsArr.push(subsection)

    let [filter,setFilter] = useState(true)
    function changeFilter (select){
        if (select == filter){
            setFilter(true)
            state.changeMarkersFilt(true)
        }else{
            state.changeMarkersFilt(select)
            setFilter(select)
        }
    }
    const markersFilter = (marker) => {
        if (filter == true){
            return marker
        }else{
            return marker['под-раздел'] == filter
        }
    }
    return (
        <div className={classes.sectionMarkers}>
            <div className={classes.sectionMarkers__inputBackground}>
                <Search/>
            </div>
            <div className={classes.sectionMarkers__filter}>
                {
                    subsectionsArr.map((subsection,index) => {
                        return <FilterItem text={subsection} key={index} changeFilter={changeFilter}/>
                    })
                }
            </div>
            <div className={classes.sectionMarkers__markers}>
                {
                    markers
                        .filter(marker => markersFilter(marker))
                        .map((marker,index) => {
                        return <MarkerPreview marker={marker} key={index} to={to}/>
                    })
                }
            </div>
        </div>
    );
};

export default SectionMarkers;