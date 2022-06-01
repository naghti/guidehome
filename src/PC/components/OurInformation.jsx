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
            img: 'https://sun9-79.userapi.com/s/v1/if2/C5QX82dwQpm6n5mDLzAzyflDeEu8_UB2Cjx6r5mTGnhQHO7DdWQm1KXFXww4Y35_L3noSVMbeEzDNvloBmHClBZU.jpg?size=40x40&quality=96&type=album',
            title: 'Обратная Связь',
            url:'https://quintadb.ru/widgets/cVW4tcGCjcu4kguSo-W6LZ/cWtJvaWObdOzWTWQ8HWOuD'
        },
        {
            img: 'https://sun9-41.userapi.com/s/v1/if2/JZO-J8ia0mhfMu3ecedAlbscPbkDL75CMdYzLAIbC07_rWVC9RQ-Iap9U0eal5N7rxEfEI6kqP9-1APfJpFfKZqo.jpg?size=40x40&quality=96&type=album',
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