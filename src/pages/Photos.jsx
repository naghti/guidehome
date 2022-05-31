import React, {useEffect, useState} from 'react';
import PhotosComponent from "../components/PhotosComponent";
import PostService from "../API/PostService";
import {useParams} from "react-router-dom";
import state from '../state/state';
const Photos = () => {
    const params = useParams()
    let [loading,setLoading] = useState(true)
    const [photo,setPhoto] = useState([])
    useEffect(() => {
        state.changeLoader(true)
        fetchPhoto()
    }, [])
    async function fetchPhoto(){
        const responce = await PostService.getMarkerPhoto(params.id)
        setPhoto(responce)
        setLoading(false)
        state.changeLoader(false)

    }
    return (
        <>
            {
                loading
                    ? <div>загрузка</div>
                    : <PhotosComponent photo={photo} to={'/' + params.section + '/' + params.id}/>
            }

        </>
    );
};

export default Photos;