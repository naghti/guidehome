import React from "react";
import ReactDOM from "react-dom";
import ReactMapboxGl, { Feature, Layer } from "react-mapbox-gl";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { Marker } from "react-mapbox-gl";
import {observer} from "mobx-react-lite";
import state from "../../state/state";
import { useNavigate } from "react-router-dom";
import InputName from "../UI/box/InputName";
import MarkerPreview from "../MarkerPreview";
import { ZoomControl } from "react-mapbox-gl";
import { ScaleControl } from "react-mapbox-gl";
import { RotationControl } from "react-mapbox-gl";
import MarkerUserGeolocation from "./MarkerUserGeolocation";
import markerPin from '../../../image/markerPin.png'

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g"
});

const PlaceMap = observer(({marker,path}) => {

    console.log(marker)
    let markeri = {
        'id' : marker.id,
        'фото' : marker.photo[0],
        'имя' : marker.firstBlock[0],
        'под-раздел' : marker.firstBlock[1],
        'улица' : marker.secondBlock[1][1],
    }
    function clickMarker(){
        state.changeOpenMarker(undefined)
        router(`/${marker["раздел"]}/${marker['id']}`)
    }
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
      <div>
          <Map
              style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
              containerStyle={{
                  height: "100vh",
                  width: "100vw",
              }}
              onClick={(e) => {
                  console.log(e.getCenter());
              }}
              center={[+marker["coordinats"].split(",")[1], +marker["coordinats"].split(",")[0]]}
              onStyleLoad={changeMapLanguage}
              zoom={[18]}
          >
                <MarkerUserGeolocation/>
              <ZoomControl style={{top: '45%'}}/>
              <RotationControl style={{top: '70px'}}/>
              {marker != undefined ? (
                <Marker
                    coordinates={[
                        +marker["coordinats"].split(",")[1],
                        +marker["coordinats"].split(",")[0],
                    ]}
                    anchor="center"
                >
                    <div
                        onClick={() => clickMarker()}
                    >
                        <img
                            src={markerPin}
                            alt="marker"
                            style={{width:20}}
                        />
                    </div>
                </Marker>

              ) : (
                  <div></div>
              )}
          </Map>
          <div style={{position:'fixed',zIndex:9,top:0,display:'flex',justifyContent:'center',width:'100vw',padding:10,background:'white'}}>
              <InputName
                  inputText={marker.firstBlock[0]}
              />
          </div>
          <div style={{position:'fixed',zIndex:9,bottom:5,display:'flex',justifyContent:'center',width:'100vw'}}>
              <MarkerPreview marker={markeri}/>
          </div>
      </div>
  );
})
export default PlaceMap;