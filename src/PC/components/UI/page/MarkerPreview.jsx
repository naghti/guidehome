import React from 'react';
import classes from "./MarkerPreview.module.css";
import {useNavigate} from "react-router-dom";
const MarkerPreview = ({marker,to}) => {

    const id = marker['id']
    const name = marker['имя']
    const photo = marker['фото']
    const coordinats = marker['координаты']

    let other = []
    Object.keys(marker).map(key => {
        console.log(marker)
        if(
            marker[key] != id &&
            marker[key] != name &&
            marker[key] != photo &&
            key != 'путь' &&
            marker[key] != coordinats
        ){
            other.push(marker[key])
        }
    })

    const router = useNavigate()
    return (
        <div
            className={classes.markerPreview}
            onClick={() => router(`/${to}/${id}`)}
        >
            <div className={classes.markerPreview__text}>
                <h4 className={classes.markerPreview__name}>{name}</h4>
                {
                    other.map((item,index) => {
                        return <h5 className={classes.markerPreview__dopInfo} key={index}>{item}</h5>
                    })
                }
            </div>
            <div className={classes.markerPreview__photoBox}>
                <img
                    className={classes.markerPreview__photo}
                    src={photo}
                />
            </div>
        </div>
    );
};

export default MarkerPreview;