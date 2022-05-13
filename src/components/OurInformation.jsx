import React from 'react';
import classes from './css/OurInformation.module.css'
import OurInformationItem from "./UI/page/OurInformationItem";

const OurInformation = () => {
    let items = [
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/VK_Compact_Logo.svg/190px-VK_Compact_Logo.svg.png',
            title: 'Мы в Вконтакте',
            url:'https://vk.com/bestroute70'
        },
        {
            img: 'https://img.icons8.com/ultraviolet/40/000000/feedback.png',
            title: 'Обратная Связь',
            url:'https://quintadb.ru/widgets/cVW4tcGCjcu4kguSo-W6LZ/cWtJvaWObdOzWTWQ8HWOuD'
        },
        {
            img: 'https://img.icons8.com/ultraviolet/40/000000/add-image.png',
            title: 'Добавить Место',
            url:'https://quintadb.ru/widgets/cVW4tcGCjcu4kguSo-W6LZ/blW4RcGvncNioSW7O0ySoC'
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