import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import ReactMapboxGl from "react-mapbox-gl";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { Marker } from "react-mapbox-gl";
import {observer} from "mobx-react-lite";
import state from "../../state/state";
import { useNavigate } from "react-router-dom";
import { ZoomControl } from "react-mapbox-gl";
import { ScaleControl } from "react-mapbox-gl";
import { RotationControl } from "react-mapbox-gl";
import MarkerUserGeolocation from "./MarkerUserGeolocation";
import markerPin from '../../../image/markerPin.png'

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g"
});

const IndexMap = observer(({markers}) => {
    console.log(markers)
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
              center={[state.center.lng, state.center.lat]}
              onStyleLoad={changeMapLanguage}
          >
              <MarkerUserGeolocation/>
              <ZoomControl style={{top: '45%'}}/>
              <ScaleControl/>
              <RotationControl style={{top: '100px'}}/>
              {markers != undefined ? (
                  markers.map((marker, index) => (
                      <Marker
                          coordinates={[
                              +marker["координаты"].split(",")[1],
                              +marker["координаты"].split(",")[0],
                          ]}
                          anchor="center"
                      >
                          <div
                              onClick={() => router(`/${marker["раздел"]}/${marker["id"]}`)}
                          >
                              <img
                                  src={markerPin}
                                  alt="marker"
                                  style={{ width: 20 }}
                              />
                          </div>
                      </Marker>
                  ))
              ) : (
                  <div></div>
              )}
          </Map>
      </div>
  );
})
export default IndexMap;