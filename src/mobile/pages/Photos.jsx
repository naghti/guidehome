import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import PostService from "../API/PostService";
import Header from "../components/UI/box/Header";
import classes from './style/Photos.module.css'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

const Photos = () => {
    const params = useParams()
    const router = useNavigate()

    let [loading,setLoading] = useState(true)
    let [photos,setPhotos] = useState()
    useEffect(() => {
        fetchInfo()
    }, [])
    async function fetchInfo(){
        const Photos = await PostService.getMarkerPhoto(params.id)
        setPhotos(Photos)
        console.log(Photos)
        setLoading(!loading)
    }

    const slideImages = [
        "https://react-slideshow.herokuapp.com/assets/images/slide_4.jpg",
        "https://react-slideshow.herokuapp.com/assets/images/slide_2.jpg"    ];


    return (
        <div
             className={classes.photos}
        >
            {
                loading
                ?
                    <div></div>
                :
                <>
                    <Header
                        name={photos['имя']}
                        route={-1}
                    />
                    <AliceCarousel infinite disableButtonsControls autoPlay autoPlayInterval="3000">
                        {
                            photos['фото'].map(item => (
                                <img src={item} className={classes.photos__sliderimg} alt="" />
                            ))
                        }
                    </AliceCarousel>
                </>
            }
        </div>
    );
};

export default Photos;