import React, {useEffect, useState} from 'react';
import Input from "./UI/Input/Input";
import PostService from "../API/PostService";
import MarkersNames from "./UI/page/MarkersNames";

const Search = () => {

    let [loading,setLoading] = useState(true)
    let [inputText,setInputText] = useState('')
    const [names,setNames] = useState([])
    useEffect(() => {
        fetchPhoto()
    },[])
    async function fetchPhoto(){
        const responce = await PostService.getMarkersName()
        setNames(responce)
        setLoading(false)
    }

    return (
        <div>
            <Input inputText={inputText} setInputText={setInputText}/>
            {
                loading
                    ? <></>
                    : <MarkersNames inputText={inputText} names={names}/>
            }
        </div>
    );
};

export default Search;