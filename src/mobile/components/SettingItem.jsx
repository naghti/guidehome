import React from 'react';
import classs from './style/SettingItem.module.css'
const SettingItem = ({src,name,img}) => {
    return (
        <a 
            href={src}
            style={{textDecoration:'none'}}
        >
            <div className={classs.settingItem}>
                <img src={img} className={classs.settingItem__img}/>
                <h5 className={classs.settingItem__text}>{name}</h5>
            </div>
        </a>
    );
};

export default SettingItem;