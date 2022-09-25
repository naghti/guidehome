import React from 'react';
import classes from './css/PlaceInfo.module.css'
import {useNavigate} from "react-router-dom";
import Border from "./UI/border/Border";
import InfoItem from "./UI/box/InfoItem";
import InfoItemMini from "./UI/box/InfoItemMini";
import InfoText from "./UI/text/InfoText";
import InfoIcon from "./UI/icon/InfoIcon";
import InfoIconMini from "./UI/icon/InfoIconMini";
import Search from "./Search";
import { logDOM } from '@testing-library/react';
const PlaceInfo = ({place,to}) => {
    const router = useNavigate()
    const description = place['description']
    return (
        <div className={classes.placeInfo}>
            <div className={classes.placeInfo__inputBackground}>
                <Search/>
            </div>
            <div className={classes.placeInfo__info}>
                <img
                    className={classes.placeInfo__photo}
                    src={place.photo}
                    onClick={() => router(`/${to}/photos/${place.id}`)}
                />
                <Border style={{padding:'16px 24px'}}>
                    <h2 className={classes.placeInfo__textName}>{place?.firstBlock[0]}</h2>
                    <h3 className={classes.placeInfo__textSection} >{place?.firstBlock[1]}</h3>
                </Border>
                {
                    place.secondBlock.length < 1
                    ?
                    <></>
                    :                    
                    <Border>
                        {
                            place.secondBlock.map((item,index) =>(
                                <InfoItem key={index}>
                                    <InfoIcon
                                        src={item[0]}
                                    />
                                    <InfoText>{item[1]}</InfoText>
                                </InfoItem>
                            ))
                        }
                    </Border>
                }
                {
                    place.thirdBlock.length < 1
                    ?
                    <></>
                    :                    
                    <Border style={{padding:'6px 0'}}>
                        {
                            place.thirdBlock.map((item,index) =>(
                                <InfoItemMini key={index}>
                                    <InfoIconMini
                                        src={item[0]}
                                    />
                                    <InfoText>{item[1]}</InfoText>
                                </InfoItemMini>
                            ))
                        }
                    </Border>
                }
                {
                    place.fourthBlock.length < 1 
                    ?
                    <></>
                    :
                    <Border style={{padding:'6px 0'}}>
                        {
                            place.fourthBlock.map((item,index) =>(
                                <InfoItemMini key={index}>
                                    <InfoText>{item[0] + ' - ' + item[1] + item[2]}</InfoText>
                                </InfoItemMini>
                            ))
                        }
                    </Border>
                }
                
                {
                    description == 0 || description == null 
                    ?
                    <></>
                    :
                    <Border style={{padding:'6px 0'}}>
                        {
                            JSON.parse(description).map((item,index) =>{
                                console.log(item)
                                return <InfoItemMini key={index}>
                                    <InfoText>{item.name}</InfoText>
                                </InfoItemMini>
                            })
                        }
                    </Border>
                }
                
            </div>
        </div>
    );
};

export default PlaceInfo;