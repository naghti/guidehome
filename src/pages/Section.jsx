import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import SectionMarkers from "../components/SectionMarkers";
import PostService from "../API/PostService";
import SectionMap from "../components/maps/SectionMap";
import IndexMap from "../components/maps/IndexMap";
import state from "../state/state";
import {observer} from "mobx-react-lite";

const Section = observer(() => {
    const params = useParams()

    const [loading,setLoading] = useState(true)
    const [markers,setMarkers] = useState([])
    useEffect(() => {
        fetchMarkers()
        state.changeLoader(true)
    }, [])
    async function fetchMarkers(){
        const responce = await PostService.getSectionMarkers(params.section)
        setMarkers(responce)
        setLoading(false)
    }

    return (
        <>
            {
                loading
                    ?
                        <>
                            <div className="col-4"></div>
                            <div className="col-8">
                                <SectionMap/>
                            </div>
                        </>
                    :
                        <>
                            <div className={state.openAside ? "col-4" : "d-none"}>
                                <SectionMarkers
                                    markers={markers}
                                    to={params.section}
                                />
                            </div>
                            <div className={state.openAside ? "col-8" : "col-12"}>
                                <SectionMap
                                    coordinats={markers}
                                    section={params.section}
                                />
                            </div>
                        </>
            }
        </>
    );
});

export default Section;