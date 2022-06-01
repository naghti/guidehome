import React from 'react';
import ReactDOM from 'react-dom';
import AppMobile from './mobile/AppMobile';
import AppPC from './PC/AppPC';
import './index.css'
import statePC from './PC/state/state';
import stateMobile from './mobile/state/state';
function success(pos) {
  var crd = pos.coords;
  let latitude = crd.latitude;
  let longitude = crd.longitude;
  
  statePC.changeUserGeolocation(latitude,longitude)
  stateMobile.changeUserGeolocation(latitude,longitude)
  console.log(`latitudelatitude ${latitude}<> longitude ${longitude}`);
  console.log(`Плюс-минус ${crd.accuracy} метров.`);
};
navigator.geolocation.getCurrentPosition(success);
ReactDOM.render(
  <React.StrictMode>
  {
    window.innerWidth < 600 
    ? <AppMobile/>
    : <AppPC/>
  }
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
