

import React from "react";
import ReactDOM from "react-dom";
import ReactMapboxGl, { Feature, Layer } from "react-mapbox-gl";
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

const PlaceMap = observer(({coordinats,id,to,path}) => {
    const lineLayout = {
        'line-cap': 'round',
        'line-join': 'round'
      };
      const linePaint = {
        'line-color': '#4790E5',
        'line-width': 12,
      };
      console.log(path)
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
            <MarkerUserGeolocation/>
            {
                
                <div
                    lat={+coordinats.split(',')[0]}
                    lng={+coordinats.split(',')[1]}
                    style={{maxWidth:300}}

                >
                    {path == null || path == 0
                    ?
                    <Marker
                        coordinates={[+coordinats.split(',')[1], +coordinats.split(',')[0]]}
                        anchor="center"
                        >
                        <MapItem id={id} section={to}/>
                    </Marker>
                    :
                    <>
                        <Layer type="line" layout={lineLayout} paint={linePaint}>
                            <Feature 
                                coordinates={JSON.parse(path)}
                            />
                        </Layer>
                        
                        {
                                JSON.parse(path).map(item => {
                                    return <Marker
                                         coordinates={[
                                            +item[0],
                                            +item[1],
                                        ]}
                                         anchor="center"
                                    >
                                        <MapItem width={10}/>
                                    </Marker>
                                })
                                
                            }
                    </>}
                </div>
            }

        
          </Map>
    </div>
  );
})
export default PlaceMap;