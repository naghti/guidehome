import React, {useEffect,useState} from 'react';
import classes from './style/Browsing.module.css'
import Style from "../components/UI/box/Style";
import Input from "../components/UI/input/Input";
import InputName from "../components/UI/box/InputName";
import PostService from "../API/PostService";
import BrowsingFinds from "../components/BrowsingFinds";
import {observer} from "mobx-react-lite";
import state from "../state/state";
const Browsing = observer(() => {
    let [loading,setLoading] = useState(true)
    let [inputText,setInputText] = useState('')
    const [names,setNames] = useState([])
    useEffect(() => {
        fetchPhoto()
    },[])
    async function fetchPhoto(){
        const responce = await PostService.getMarkersName()
        setNames(responce)
        console.log(responce)
        setLoading(false)
    }

    return (
        <div
            className={classes.browsing}
        >
            <Style style={{padding:'10px 10px 0'}}>
                <InputName setInputText={setInputText} inputText={inputText}/>
                {
                    loading
                        ? <></>
                        : <BrowsingFinds inputText={inputText} names={names} setInputText={setInputText}/>
                }
            </Style>
        </div>
    );
});

export default Browsing;