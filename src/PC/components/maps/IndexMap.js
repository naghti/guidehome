import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import ReactMapboxGl, { Feature, Layer, Source } from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { Marker, GeoJSONLayer } from "react-mapbox-gl";
import MapItem from "./MapItem";
import {observer} from "mobx-react-lite";
import state from "../../state/state";
import MarkerUserGeolocation from "./MarkerUserGeolocation";
import { useNavigate } from "react-router-dom";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g"
});

const IndexMap = observer(({coordinats}) => {
    const router = useNavigate()
   
    const changeMapLanguage = (map) => {
        
        map.setStyle('mapbox://styles/naght/cl2lhr9pa001j15p6eyhlsm1t')
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

    const mappedRoute = [
        [84.91946719493541, 56.4569860199541],
        [84.97946284222417, 56.46447872308509],
        [84.95328448396512, 56.47064249701067],
    ]
    console.log(coordinats);
        return (
      <div>
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
              onStyleLoad={changeMapLanguage}
          >
              <MarkerUserGeolocation/>
              {coordinats != undefined ? (
                  coordinats.map((marker, index) => (
                    marker["путь"] == null || marker["путь"] == 0
                    ?
                    <Marker
                        coordinates={[+marker["координаты"].split(",")[1], +marker["координаты"].split(",")[0]]}
                        anchor="center"
                      >
                        <MapItem id={marker["id"]} section={marker["раздел"]}/>
                      </Marker>
                    :
                    <>

                        <Layer type="line" layout={lineLayout} paint={linePaint}>
                            <Feature 
                                coordinates={JSON.parse(marker["путь"])}
                                onClick={
                                    () => router(`/${marker["раздел"]}/${marker["id"]}`)

                                }
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
                                         onClick={
                                             () => router(`/${marker["раздел"]}/${marker["id"]}`)

                                        }
                                    >
                                        <MapItem width={10}/>
                                    </Marker>
                                })
                                
                            }
                    </>
                  ))
              ) : (
                  <div></div>
              )}

             
          </Map>
      </div>
  );
})
export default IndexMap;