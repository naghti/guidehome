import React from 'react';
import state from '../../state/state';
import image from '../../../image/userGeolocation.png'
import { Marker } from 'react-mapbox-gl';
const MarkerUserGeolocation = () => {
    if(state.userGeolocation == undefined) return <></>
    return (
        <Marker
            coordinates={[
                +state.userGeolocation.lng,
                +state.userGeolocation.lat,
            ]}
            anchor="center"
        >
            <img src={image} style={{width:20,height:20}}/>
        </Marker>
    );
};

export default MarkerUserGeolocation;