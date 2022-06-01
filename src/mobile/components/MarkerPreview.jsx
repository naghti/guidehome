import React from 'react';
import classes from './style/MarkerPreview.module.css'
import BlueButton from "./UI/button/BlueButton";
import Style from "./UI/box/Style";
import {useNavigate, useParams} from "react-router-dom";
const MarkerPreview = ({marker}) => {
    const params = useParams()
    const router = useNavigate()
    console.log(params)
    return (
        <div className={classes.markerPreview}>
            <div className={classes.markerPreview__photoBox}>
                <img
                    className={classes.markerPreview__photo}
                    src={marker['фото']}
                    alt="фото места"
                />
            </div>
            <div className={classes.markerPreview__info}>
                <h4 className={classes.markerPreview__name}>
                    {marker['имя']}
                </h4>
                <h4 className={classes.markerPreview__infoOther}>
                    {marker['под-раздел']}
                </h4>
                <h4 className={classes.markerPreview__infoOther}>
                    {marker['улица']}
                </h4>
                <div>
                    <BlueButton
                        onClick={() => router(`/${params.section}/${marker['id']}`)}
                    >
                        Открыть метку
                    </BlueButton>
                </div>
            </div>
        </div>
    );
};

export default MarkerPreview;