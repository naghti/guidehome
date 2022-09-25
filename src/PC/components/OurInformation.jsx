import React from 'react';
import classes from './css/OurInformation.module.css'
import OurInformationItem from "./UI/page/OurInformationItem";

const OurInformation = () => {
    let items = [
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/VK_Compact_Logo.svg/190px-VK_Compact_Logo.svg.png',
            title: 'Я в Вконтакте',
            url:'https://vk.com/doctor_pasyukov'
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1200px-Telegram_2019_Logo.svg.png',
            title: 'Мой телеграм',
            url:'https://t.me/Alex_Pasyukov1'
        },
    ]
    return (
        <div className={classes.ourInformation}>
            <div className={classes.ourInformation__title}>
                <h3 className={classes.ourInformation__titleText}>Доп.информация</h3>
            </div>
            <div className={classes.ourInformation__list}>
                {
                    items.map((item,index) => (
                        <OurInformationItem item={item} key={index}/>
                    ))
                }
            </div>
        </div>
    );
};

export default OurInformation;