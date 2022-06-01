import React from 'react';
import classes from './MarkersNames.module.css'
import {useNavigate} from "react-router-dom";
const MarkersNames = ({names ,inputText}) => {
    const router = useNavigate()
    if (inputText == '') return <></>
    let regex = new RegExp(inputText, "gi");
    let result = []
    names.map(name => {
        if (name['имя'].match(regex) != null){
            result.push(name)
        }
    })
    return (
        <div className={classes.markersNames}>
            {
                result.length > 0
                    ?
                    result.map((item,index) => {
                        return (
                            <div
                                className={classes.markersNames__item}
                                key={index}
                                onClick={() => router(`/place/${item['id']}`)}
                            >
                                <img src="https://sun9-12.userapi.com/impf/lyydBWhBgFDT9LsN2iqt_Rxq858kqGLeb-orpA/SZ_GioDQplo.jpg?size=40x40&quality=96&sign=4425ba8367ba8934c055d010131cd97a&type=album" alt="icon" style={{width:20,marginRight:20}}/>
                                {item['имя']}
                            </div>
                        )

                    })
                    :
                    <div className={classes.markersNames__item}>
                        <p style={{marginBottom: 0}}>ничего не найдено по запросу "{inputText}"</p>
                    </div>
            }
        </div>
    );
};

export default MarkersNames;