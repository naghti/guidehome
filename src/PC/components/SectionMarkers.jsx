import React, {useState} from 'react';
import classes from './css/SectionMarkers.module.css'
import FilterItem from "./UI/page/FilterItem";
import MarkerPreview from "./UI/page/MarkerPreview";
import Search from "./Search";
import state from "../state/state";

const SectionMarkers = ({markers,to}) => {
    console.log(markers)
    let subsections = new Set();
    let cities = new Set();
    markers.map(marker => {
        subsections.add(marker['под-раздел'])
        cities.add(marker['город'])
    })
    let subsectionsArr = []
    let citiesArr = []
    for (let subsection of subsections) subsectionsArr.push(subsection)
    for (let city of cities) citiesArr.push(city)

    let [filterSubsection,setFilterSubsection] = useState(true)
    let [filterCity,setFilterCity] = useState(true)

    function changeFilterSubsection (select){
        if (select == filterSubsection){
            setFilterSubsection(true)
            state.changeMarkersFilt(true)
        }else{
            state.changeMarkersFilt(select)
            setFilterSubsection(select)
        }
    }
    
    function changeFilterCity (select){
        console.log(filterCity)
        if (select == filterCity){
            setFilterCity(true)
            state.changeMarkersFiltCountry(true)
        }else{
            state.changeMarkersFiltCountry(select)
            setFilterCity(select)
        }
    }

    const markersFilter = (marker) => {
        if ((filterSubsection == true) && (filterCity == true)){
            return marker
        }else{
            if((filterSubsection == true) || (filterCity == true)){
                return (marker['под-раздел'] == filterSubsection) || (marker['город'] == filterCity) 
            }
            else{
                return (marker['под-раздел'] == filterSubsection) && (marker['город'] == filterCity) 
            }
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
                        return <FilterItem text={subsection} key={index} changeFilter={changeFilterSubsection}/>
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