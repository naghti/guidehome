// import React from 'react';
// import GoogleMapReact from 'google-map-react';
// import MapItem from "./MapItem";
// import MapButtons from "./MapButtons";

// const PlaceMap = ({coordinats,id}) => {
//     console.log(coordinats)
//     if(coordinats == undefined) return <div></div>
//     return (
        // <div style={{ height: '100vh', width: '100%' }}>
        //     <MapButtons clouse={true}/>
        //     <GoogleMapReact
        //         bootstrapURLKeys={{ key: 'AIzaSyBVBNRx9srL-jl36znEB3_aeXO0EGLG6YA' }}
        //         center={{
        //             lat: +coordinats.split(',')[0] ,
        //             lng: +coordinats.split(',')[1] ,
        //         }}
        //         defaultZoom={19}
        //     >
        //         {
        //             <div
        //                 lat={+coordinats.split(',')[0]}
        //                 lng={+coordinats.split(',')[1]}
        //                 style={{maxWidth:300}}


        //             >
        //                 <MapItem id={id}/>
        //             </div>
        //         }
        //     </GoogleMapReact>
        // </div>
//     );
// };

// export default PlaceMap;


import React from "react";
import ReactDOM from "react-dom";
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { Marker } from "react-mapbox-gl";
import MapItem from "./MapItem";
import {observer} from "mobx-react-lite";
import state from "../../state/state";
import MapButtons from "./MapButtons";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g"
});
const changeMapLanguage = (map) => {
  map.getStyle().layers.forEach((layer) => {
      if (layer.layout && layer.layout["text-field"]) {
          map.setLayoutProperty(layer.id, "text-field", [
              "coalesce",
              ["get", "name_" + 'ru'],
              ["get", "name"],
          ]);
      }
  });
  state.changeLoader(false)

};

const PlaceMap = observer(({coordinats,id,to}) => {
if(coordinats == undefined) return <div></div>
  return (
        <div style={{ height: '100vh', width: '100%' }}>
        <MapButtons clouse={true} to={`/section/${to}`}/>
        <Map
              style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
              containerStyle={{
                  height: "100vh",
                  width: "100%",
              }}
              onClick={(e) => {
                  console.log(e.getCenter());
              }}
              center={[+coordinats.split(',')[1],+coordinats.split(',')[0]]}
              zoom={[13]}
              onStyleLoad={changeMapLanguage}
          >
            {
                
                <div
                    lat={+coordinats.split(',')[0]}
                    lng={+coordinats.split(',')[1]}
                    style={{maxWidth:300}}

                >
                    <Marker
                        coordinates={[+coordinats.split(',')[1], +coordinats.split(',')[0]]}
                        anchor="center"
                        >
                        <MapItem id={id} section={to}/>
                    </Marker>
                </div>
            }

        
          </Map>
    </div>
  );
})
export default PlaceMap;