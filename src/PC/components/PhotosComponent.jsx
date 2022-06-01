import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import PostService from "../API/PostService";
import classes from './css/Photos.module.css'
import Border from "./UI/border/Border";
import AddPhoto from "./UI/button/AddPhoto";
import OpenPhoto from "./UI/photo/OpenPhoto";
import PhotoItem from "./UI/page/PhotoItem";
import ChangePhoto from "./UI/page/ChangePhoto";
import React, { Component }  from 'react';
const PhotosComponent = ({photo,to}) => {
    let [openPhoto,setOpenPhoto] = useState(0)
    const navigate = useNavigate();

    function clickImage(index){
        setOpenPhoto(index)
    }
    function changePhoto(i){
        const limit = photo['фото'].length - 1
        if( openPhoto + i > limit ) return setOpenPhoto(0)
        if( openPhoto + i < 0 ) return setOpenPhoto(limit)
        setOpenPhoto(openPhoto + i)
    }

    return (
        <div className={classes.photos}>
            <div className="col-4">
                <div className={classes.photos__leftPart}>
                    <Border>
                        <div className={classes.photos__preview}>
                            <img
                                onClick={() => navigate(to)}
                                src="https://www.gstatic.com/images/icons/material/system_gm/1x/arrow_back_gm_grey_24dp.png"
                                alt="back"
                                style={{cursor:'pointer'}}
                            />
                            <h4 className={classes.photos__name}>
                                {photo['имя']}
                            </h4>
                            <AddPhoto/>
                        </div>
                    </Border>
                    <div className={classes.photos__photoList}>
                        {
                                photo['фото'].map((src,index) => {
                                    return <PhotoItem
                                        src={src}
                                        key={index}
                                        onClick={() => clickImage(index)}
                                    />
                                })
                        }
                    </div>
                </div>
            </div>
            <div className="col-8">
                <div className={classes.photos__rightPart}>
                    {<OpenPhoto src={photo['фото'][openPhoto]}/>}
                    <ChangePhoto changePhoto={changePhoto}/>
                </div>
            </div>
        </div>
    );
};

export default PhotosComponent;