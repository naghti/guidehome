import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PlaceInfo from "../components/PlaceInfo";
import PostService from "../API/PostService";
import ResponceHandler from "../API/ResponceHandler";
import PlaceMap from "../components/maps/PlaceMap";
import {observer} from "mobx-react-lite";
import state from "../state/state";

const Place =  observer(() => {
    const params = useParams()
    let [loading,setLoading] = useState(true)
    const [place,setPlace] = useState({})
    useEffect(() => {
        state.changeLoader(true)
        fetchPlace()
    }, [])
    async function fetchPlace(){
        const responce = await PostService.getMarker(params.id)
        setPlace(responce)
        console.log(responce['путь']);
        setLoading(false)
    }

    
    return (
        <>
            {
                loading
                    ?
                    <>
                        <div className="col-4">
                        </div>
                        <div className="col-8">
                            <PlaceMap/>
                        </div>
                    </>
                    :
                    <>
                        <div className={state.openAside ? "col-4" : "d-none"}>
                            <PlaceInfo place={place} to={params.section}/>
                        </div>
                        <div className={state.openAside ? "col-8" : "col-12"}>
                            <PlaceMap coordinats={place.coordinats} path={place['путь']} id={place.id} to={params.section}/>
                        </div>
                    </>
            }
        </>
    );
});

export default Place;