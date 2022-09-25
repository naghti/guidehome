// import React from 'react';
// import GoogleMapReact from 'google-map-react';
// import MapItem from "./MapItem";
// import {observer} from "mobx-react-lite";
// import state from "../../state/state";
// import MapButtons from "./MapButtons";
// const SectionMap = observer(({coordinats}) => {
//     function filter(marker){
//         if (state.markersFilt == true) {
//             return true
//         }else {
//             return marker['под-раздел'] == state.markersFilt
//         }
//     }
//     return (
//         <div style={{ height: '100vh', width: '100%' }}>
//             <MapButtons clouse={true}/>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: 'AIzaSyBVBNRx9srL-jl36znEB3_aeXO0EGLG6YA' }}
//                 center={{
//                     lat: 56.491098,
//                     lng: 84.962755,
//                 }}
//                 defaultZoom={13}
//             >
//                 {
//                     coordinats != undefined ?

//                         coordinats
//                             .filter(marker => filter(marker))
//                             .map( (marker,index) => (
//                             <div
//                                 lat={+marker['координаты'].split(',')[0]}
//                                 lng={+marker['координаты'].split(',')[1]}
//                                 key={index}
//                             >
//                                 <MapItem id={marker['id']}/>
//                             </div>
//                         ))
//                         : <div></div>
//                 }
//             </GoogleMapReact>
//         </div>
//     );
//     }
// )


// export default SectionMap;


import React from "react";
import ReactDOM from "react-dom";
import ReactMapboxGl, { Feature, Layer, Source } from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { Marker } from "react-mapbox-gl";
import MapItem from "./MapItem";
import {observer} from "mobx-react-lite";
import state from "../../state/state";
import MapButtons from "./MapButtons";
import MarkerUserGeolocation from "./MarkerUserGeolocation";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g"
});

const SectionMap = observer(({coordinats,section}) => {
    console.log(coordinats);
    function filter(marker){
        if (state.markersFilt == true) {
            return true
        }else {
            return marker['под-раздел'] == state.markersFilt
        }
    }
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
    const lineLayout = {
        'line-cap': 'round',
        'line-join': 'round'
      };
      const linePaint = {
        'line-color': '#4790E5',
        'line-width': 12,
      };

  return (
        <div style={{ height: '100vh', width: '100%' }}>
        <MapButtons clouse={true} to={'/'}/>
        <Map
              style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
              containerStyle={{
                  height: "100vh",
                  width: "100%",
              }}
              onClick={(e) => {
                  console.log(e.getCenter());
              }}
              center={[state.center.lng,state.center.lat]}
              zoom={[13]}
              onStyleLoad={changeMapLanguage}
          >
            <MarkerUserGeolocation/>
            {
                coordinats != undefined ?

                coordinats
                    .filter(marker => filter(marker))
                    .map( (marker,index) => (
                        marker['путь'] == null
                        ?
                        <div
                            lat={+marker['координаты'].split(',')[0]}
                            lng={+marker['координаты'].split(',')[1]}
                            key={index}
                        >
                            <Marker
                                coordinates={[+marker['координаты'].split(',')[1], +marker['координаты'].split(',')[0]]}
                                anchor="center"
                                >
                                <MapItem id={marker['id']} section={section}/>
                            </Marker>
                        </div>
                        :
                        <>
                            <Layer type="line" layout={lineLayout} paint={linePaint}>
                                <Feature 
                                    coordinates={JSON.parse(marker["путь"])}
                                />
                            </Layer>
                            {
                                JSON.parse(marker["путь"]).map(item => {
                                    return <Marker
                                         coordinates={[
                                            +item[0],
                                            +item[1],
                                        ]}
                                         anchor="center"
                                    >
                                        <MapItem width={10} id={marker['id']} section={section}/>
                                    </Marker>
                                })
                                
                            }
                        </>
                ))
                : <div></div>
            }
        
          </Map>
    </div>
  );
})
export default SectionMap;