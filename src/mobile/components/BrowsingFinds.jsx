import React from 'react';
import classes from './style/BrowsingFinds.module.css'
import {useNavigate} from "react-router-dom";
import state from "../state/state";
const BrowsingFinds = ({names,inputText,setInputText}) => {
    const router = useNavigate()
    if (inputText == '') return <></>
    let regex = new RegExp(inputText, "gi");
    let result = []
    names.map(name => {
        if (name['имя'].match(regex) != null){
            result.push(name)
        }
    })
    console.log(names)
    function markerClick(item){
        state.changeBrowsingOpen(false)
        router(`/place/${item['id']}`)
        setInputText('')
    }
    return (
        <div className={classes.browsingFinds}>
            {
                result.length > 0
                    ?
                    result.map((item,index) => {
                        return (
                            <div
                                className={classes.browsingFinds__item}
                                key={index}
                                onClick={() => markerClick(item)}
                            >
                                <img src="https://sun9-12.userapi.com/impf/lyydBWhBgFDT9LsN2iqt_Rxq858kqGLeb-orpA/SZ_GioDQplo.jpg?size=40x40&quality=96&sign=4425ba8367ba8934c055d010131cd97a&type=album" alt="icon" style={{width:25,margin:'0 10px'}}/>
                                <div className={classes.browsingFinds__textBox} style={{padding:'15px'}}>
                                    <p>
                                        {item['имя']}
                                    </p>
                                </div>
                            </div>
                        )

                    })
                    :
                    <div className={classes.browsingFinds__item}>
                        <p style={{margin:'0 auto',padding:'15px',textAlign:'center'}}>ничего не найдено по запросу "{inputText}"</p>
                    </div>
            }
        </div>    );
};

export default BrowsingFinds;