import React, {useEffect, useState} from 'react';
import PhotosComponent from "../components/PhotosComponent";
import PostService from "../API/PostService";
import {useParams} from "react-router-dom";
const Photos = () => {
    const params = useParams()
    let [loading,setLoading] = useState(true)
    const [photo,setPhoto] = useState([])
    useEffect(() => {
        fetchPhoto()
    }, [])
    async function fetchPhoto(){
        const responce = await PostService.getMarkerPhoto(params.id)
        setPhoto(responce)
        setLoading(false)
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