import React from 'react';
import classes from './style/ChangeCountry.module.css'
import citiesImage from '../image/cities.png'
import state from '../state/state';
import { observer } from 'mobx-react-lite';
const ChangeCountry = observer(() => {
    let countries = [
        {
            name:'Томск',
            lat: 56.491098,
            lng: 84.962755,
        },
        {
            name:'Калининград',
            lat: 54.71091457793099,
            lng: 20.496897774419352,
        },
    ]
    let activeCountry = state.center.lat == countries[0].lat ? 1 : 0;
    function changeCountry (){
        state.changeCenter(
            {
                lat: countries[activeCountry].lat,
                lng: countries[activeCountry].lng,    
            }
        )
        state.changeSetting(false)
    }
    return (
        <div className={classes.changeCountry}>
            <div className={classes.changeCountry__imageBox}>
                <img
                    src={citiesImage}
                    className={classes.changeCountry__image}
                />
            </div>
            <div className={classes.changeCountry__textBox}
                onClick={() => changeCountry()}
            >
                <h4 className={classes.changeCountry__text}>Изменить город</h4>
                <p className={classes.changeCountry__text}>Сменить на: <br/> {countries[activeCountry].name}</p>
            </div>
        </div>
    );
});

export default ChangeCountry;