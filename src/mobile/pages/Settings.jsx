import React from 'react';
import classes from './style/Settings.module.css'
import state from "../state/state";
import SettingItem from '../components/SettingItem';
import ChangeCountry from '../components/ChangeCountry';
import settingsImage from '../image/settingsImage.png'
const Settings = () => {
    let dopInformation = [
        {
            name:'Обратная связь',
            src:'https://quintadb.ru/widgets/cVW4tcGCjcu4kguSo-W6LZ/cWtJvaWObdOzWTWQ8HWOuD',
            img:'https://img.icons8.com/ultraviolet/80/000000/feedback.png',
        },
        {
            name:'Мы в Вконтакте',
            src:'https://vk.com/bestroute70',
            img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/VK_Compact_Logo.svg/190px-VK_Compact_Logo.svg.png',
        },
        {
            name:'Добавить Место',
            src:'https://quintadb.ru/widgets/cVW4tcGCjcu4kguSo-W6LZ/blW4RcGvncNioSW7O0ySoC',
            img:'https://img.icons8.com/ultraviolet/80/000000/add-image.png',
        }
    ]
    return (
        <div
            className={classes.settings__box}
            onClick={() => state.changeSetting(false)}
        >
            <div className={classes.settings}
                onClick={(e) => e.stopPropagation()}
            >

                <div className={classes.settings__header + ' ' + classes.settings__border}>
                    <img
                        src={settingsImage}
                        alt="logo"
                        className={classes.settings__headerImg}
                    />
                </div>
                <ChangeCountry/>
                {
                    dopInformation.map(item => (                
                        <SettingItem
                            src={item.src}
                            name={item.name}
                            img={item.img}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Settings;