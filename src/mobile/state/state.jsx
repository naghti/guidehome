import {makeAutoObservable} from "mobx";

class State {
    markersFilt = true;
    inputValue = undefined;
    BrowsingOpen = false;
    center = {
        lat: 56.491098,
        lng: 84.962755,
    }
    userGeolocation = undefined
    settings = false
    openMarker = undefined
    loader = false
    markersFilter = undefined
    constructor() {
        makeAutoObservable(this)
    }
    changeUserGeolocation(lat,lng){
        this.userGeolocation = {
            lat: lat,
            lng: lng,
        }
    }
    changeCenter(i){
        this.center = i
    }
    changeLoader(i){
        this.loader = i
    }
    changeMarkersFilt(i){
        this.markersFilt = i
    }
    changeOpenMarker(i){
        this.openMarker = i
    }
    changeInputValue(i){
        this.inputValue = i
    }
    changeBrowsingOpen(i){
        this.BrowsingOpen = i
    }
    changeSetting(i){
        this.settings = i
    }
    changeMarkersFilter(i){

        if (this.markersFilter == i){
            this.markersFilter = undefined
        }else{
            this.markersFilter = i
        }
    }

}
export default new State()