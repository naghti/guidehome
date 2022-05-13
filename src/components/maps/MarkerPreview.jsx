import React from 'react';
import classes from './css/MarkerPreview.module.css'
import state from "../../state/state";

const MarkerPreview = ({photo,name,subsection,setComponent}) => {
    return (
        <div
            className={classes.markerPreview}
            onMouseLeave={() => {
                state.changeOpenMarkersPreview(true)
                setComponent()
            }}
            onClick={() => {
                state.changeOpenMarkersPreview(true)
                setComponent()
            }}
        >
            <div className={classes.markerPreview__photoBox}>
                <img
                    src={photo}
                    alt="фото"
                    className={classes.markerPreview__photo}
                />
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div className={classes.markerPreview__text}>
                    <h4
                        style={{fontSize: 16, color: '#202124',marginBottom: 0}}
                    >
                        {name}
                    </h4>
                    <h4
                        style={{fontSize: 12, color: '#70757a',marginBottom: 0}}
                    >
                        {subsection}
                    </h4>
                </div>
                <div className={classes.markerPreview__imageBox}>
                    <img
                        src="https://sun9-12.userapi.com/impf/lyydBWhBgFDT9LsN2iqt_Rxq858kqGLeb-orpA/SZ_GioDQplo.jpg?size=40x40&quality=96&sign=4425ba8367ba8934c055d010131cd97a&type=album"
                        alt="img"
                        style={{width: 30 }}
                    />
                </div>
            </div>
        </div>
    );
};

export default MarkerPreview;