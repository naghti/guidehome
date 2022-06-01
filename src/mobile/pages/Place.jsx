import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import PostService from "../API/PostService";
import classes from './style/Place.module.css'
import Header from "../components/UI/box/Header";
import VerticalBox from "../components/UI/box/VertivalBox";
import Text3c4043 from "../components/UI/text/text3c4043";
import ListItem from "../components/UI/box/ListItem";
import SmallListItem from "../components/UI/box/SmallListItem";
import PlaceMap from "../components/maps/PlaceMap";
import state from "../state/state";
import addPhoto from '../image/addPhoto.jpg'
import shareImage from '../image/share.png'
import phone from '../image/phone.png'
import openOnMap from '../image/openOnMap.png'
import { observer } from 'mobx-react-lite';

const Place = observer(() => {
    const params = useParams()
    const router = useNavigate()
    let [loading,setLoading] = useState(true)
    let [sectionMarkers,setSectionMarkers] = useState()
    useEffect(() => {
        state.changeLoader(true)
        fetchInfo()
    }, [])

    async function fetchInfo(){
        const Marker = await PostService.getMarker(params.id)
        setSectionMarkers(Marker)
        console.log(Marker)
        setLoading(!loading)
        state.changeLoader(false)

    }
    function share(){
        navigator.clipboard.writeText(document.location.href)
        alert('Ссылка на страницу скопированна в буфер обмена')
    }
    return (
        <div className={classes.place} >
        {
            loading ?
                <div></div>
            :
            <>
                <Header
                    name={sectionMarkers['firstBlock'][0]}
                    route={`/section/${params.section}`}
                />
                <div className={classes.place__photos}>
                    {
                        sectionMarkers['photo'].map(item => (
                            <img
                                src={item}
                                alt="photo"
                                className={
                                    sectionMarkers['photo'].length > 1 
                                    ? 
                                        classes.place__photoItem
                                    :
                                        classes.place__photoItem_active
                                }
                            />
                        ))
                    }
                </div>
                
                <VerticalBox style={{padding: '8px 24px 16px'}}>
                    <h5 className={classes.place__name} style={{color:'black',marginBottom:5}}>
                        {sectionMarkers['firstBlock'][0]}
                    </h5>
                    <p className={classes.place__grayText}>
                        {sectionMarkers['firstBlock'][1]}
                    </p>
                </VerticalBox>

                <div className={
                    classes.place__dopBlock
                    + ' ' +
                    classes.place__border
                }>
                    <div className={classes.place__BlueBox}>
                        <div
                            className={classes.place__Blueblock}
                            onClick={() => state.changeOpenMarker(sectionMarkers)}
                        >
                            <img
                                src={openOnMap}
                                alt="телефон"
                                style={{width:18}}
                            />
                        </div>
                        <p
                            className={classes.place__BlueText}
                        >окрыть на карте</p>
                    </div>
                    {
                        sectionMarkers['dopBlock'] == null
                        ?
                            <></>
                        :
                            <div className={classes.place__BlueBox}>
                                <a href={"tel:+" + sectionMarkers['dopBlock']}>
                                    <div
                                        className={classes.place__Blueblock}
                                    >
                                        <img
                                            src={phone}
                                            alt="телефон"
                                            style={{width:18}}
                                        />
                                    </div>
                                    <p
                                        className={classes.place__BlueText}
                                    >вызов</p>
                                </a>
                            </div>
                    }
                    <div className={classes.place__BlueBox}>
                        <a href="https://quintadb.ru/widgets/cVW4tcGCjcu4kguSo-W6LZ/blW4RcGvncNioSW7O0ySoC"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <div
                                className={classes.place__Blueblock}
                            >
                                <img
                                    src={addPhoto}
                                    alt="телефон"
                                    style={{width:18}}
                                />
                            </div>
                            <p
                                className={classes.place__BlueText}
                            >добавить фото</p>
                        </a>
                    </div>
                    <div className={classes.place__BlueBox}>
                        <div
                            className={classes.place__Blueblock}
                            onClick={() => share()}
                        >
                            <img
                                src={shareImage}
                                alt="поделиться"
                                style={{width:18}}
                            />
                        </div>
                        <p
                            className={classes.place__BlueText}
                        >поделиться</p>
                    </div>
                </div>


                <VerticalBox>
                    {
                        sectionMarkers['secondBlock'].map(item => (
                            <ListItem>
                                <img
                                    src={item[0]}
                                    alt="icon"
                                    className={classes.place__blueIcon}
                                />
                                <Text3c4043>{item[1]}</Text3c4043>
                            </ListItem>
                        ))
                    }
                </VerticalBox>

                <VerticalBox>
                    {
                        sectionMarkers['thirdBlock'].map(item => (
                            <SmallListItem>
                                <img
                                    src={item[0]}
                                    alt="icon"
                                    className={classes.place__blueIcon}
                                />
                                <Text3c4043>{item[1]}</Text3c4043>
                            </SmallListItem>
                        ))
                    }
                </VerticalBox>

                <VerticalBox style={{padding: '16px 20px'}}>
                    <p className={classes.place__name} style={{color:'black',marginBottom:5}}>
                        Фото
                    </p>
                    <div className={
                        classes.place__photoBlockItem
                    }
                    onClick={() => router(`/place/photos/${sectionMarkers['id']}`)}
                    >
                        <img src={sectionMarkers['photo'][0]} alt="фото" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'7px',filter: 'brightness(0.7)'}}/>
                        <h5
                            className={
                                classes.place__photoText
                            }
                        >
                            {sectionMarkers['photo'].length + ' фото'}
                        </h5>

                    </div>
                </VerticalBox>

                <VerticalBox>
                    {
                        sectionMarkers['fourthBlock'].map(item => (
                            <SmallListItem>
                                <Text3c4043>
                                    {
                                        item[0]
                                        + " - " +
                                        item[1]
                                        +
                                        item[2]
                                    }
                                </Text3c4043>
                            </SmallListItem>
                        ))
                    }
                </VerticalBox>
            </>
        }
        </div>
    );
});

export default Place;