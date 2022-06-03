import React from 'react';
import ReactDOM from 'react-dom';
import AppMobile from './mobile/AppMobile';
import AppPC from './PC/AppPC';
import './index.css'
import statePC from './PC/state/state';
import stateMobile from './mobile/state/state';
function success(pos) {
  var crd = pos?.coords;
  let latitude = crd?.latitude;
  let longitude = crd?.longitude;
  
  if(latitude != undefined && longitude != undefined){
    statePC.changeUserGeolocation(latitude,longitude)
    stateMobile.changeUserGeolocation(latitude,longitude)
  }
};
function error() {
  alert('Раздрешите доступ к геоданным для отображения вашего местоположения')
};
navigator.geolocation.getCurrentPosition(success,error);
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
