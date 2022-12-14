import React, {useEffect, useState} from 'react';
import PostService from "../API/PostService";
import {useNavigate, useParams} from "react-router-dom";
import SectionMap from "../components/maps/SectionMap";
import classes from './style/Section.module.css'
import InputName from "../components/UI/box/InputName";
import Style from "../components/UI/box/Style";
import Chapter from "../components/UI/box/Chapter";
import SectionMarkers from "../components/SectionMarkers";
import state from '../state/state';
import { observer } from 'mobx-react-lite';
const Section = observer(() => {
    let [sectionMarkers,setSectionMarkers] = useState()
    let [loading,setLoading] = useState(true)
    const params = useParams()
    useEffect(() => {
        state.changeLoader(true)
        fetchInfo()
    }, [])
    async function fetchInfo(){
        const SectionMarkers = await PostService.getSectionMarkers(params.section)
        setSectionMarkers(SectionMarkers)
        console.log(SectionMarkers)
        setLoading(false)
    }
    const router = useNavigate()
    let subsections = new Set();
    let cities = new Set();
    let subsectionsArr = [];
    let citiesArr = [];
    if(!loading){
        console.log(sectionMarkers)
        sectionMarkers.map(marker => {
            subsections.add(marker['под-раздел'])
            cities.add(marker['город'])
        })
        subsections.forEach((value, valueAgain, set) => {
            subsectionsArr.push(value);
        });
        cities.forEach((value, valueAgain, set) => {
            citiesArr.push(value);
        });

    }
    console.log(sectionMarkers)
    return (
        <div className={classes.section}>
            {
            loading
                ?
                <div></div>
                :
                <>
                    <div className={classes.section__header}>
                        <Style style={{padding: '10px'}}>
                            <InputName
                                to={'/'}
                            />
                        </Style>
                        <div className={classes.section__list}>
                            {
                                subsectionsArr.map(item => (
                                    <Chapter
                                        name={item}
                                        click={() => state.changeMarkersFilter(item)}
                                        active={state.markersFilter == item}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <SectionMap sectionMarkers={sectionMarkers}/>
                    <SectionMarkers sectionMarkers={sectionMarkers}/>
                </>
            }
        </div>
    );
});

export default Section;