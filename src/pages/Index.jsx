import React, {useEffect, useState} from 'react';
import Sidebar from "../components/Sidebar";
import IndexMap from "../components/maps/IndexMap";
import PostService from "../API/PostService";
import {observer} from "mobx-react-lite";
import state from "../state/state";
const Index = observer(() => {

    const [loading,setLoading] = useState(true)
    const [sections,setSections] = useState([])
    const [coordinats,setCoordinats] = useState([])
    useEffect(() => {
        state.changeLoader(true)    
        fetchInfo()
    }, [])
    async function fetchInfo(){
        const MarkersCoordinats = await PostService.getMarkersCoordinats()
        
        setCoordinats(MarkersCoordinats)

        const Sections = await PostService.getSections()
        setSections(Sections)

        setLoading(false)
    }


    return (
        <>
            {
                loading
                    ?
                    <>
                        <div className="col-3"></div>
                        <div className="col-9"><IndexMap/></div>
                    </>
                    :
                    <>
                        <div className={state.openAside ? "col-3" : "d-none"}><Sidebar sections={sections} to={''}/></div>
                        <div className={state.openAside ? "col-9" : "col-12"}><IndexMap coordinats={coordinats}/></div>
                    </>
            }
        </>
    );
})

export default Index;