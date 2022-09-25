import React, {useEffect, useState} from 'react';
import classes from './css/Sidebar.module.css'
import Section from "./UI/page/Section";
import PostService from "../API/PostService";
import Search from "./Search";
import OurInformation from "./OurInformation";
import ChangeCountry from "./ChangeCountry";
const Sidebar = ({sections,to}) => {

    return (
        <div className={classes.sidebar}>
            <div className={classes.sidebar__inputImage} style={{height:128}}>
                <Search to={to}/>
            </div>
            <div className={classes.sidebar__sections}>
                {sections.map((section,index) => {
                    return <Section src={section.src} name={section.name} section={section.section}  key={index}/>
                })}
            </div>
            <OurInformation/>
        </div>
    );
};

export default Sidebar;