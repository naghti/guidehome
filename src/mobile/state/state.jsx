import {makeAutoObservable} from "mobx";

class State {
    markersFilt = true;
    inputValue = undefined;
    BrowsingOpen = false;
    center = {
        lat: 56.491098,
        lng: 84.962755,
    }
    sectionActiveMarker = undefined
    userGeolocation = undefined
    settings = false
    openMarker = undefined
    loader = false
    markersFilter = undefined
    markersFiltCountry = undefined;
    constructor() {
        makeAutoObservable(this)
    }
    changeUserGeolocation(lat,lng){
        this.userGeolocation = {
            lat: lat,
            lng: lng,
        }
    }
    changeMarkersFiltCountry(i){
        let countries = [
            {
                name:'Томск',
                lat: 56.491098,
                lng: 84.962755,
            },
            {
                name:'Калининград',
                lat: 54.71091457793099,
                lng: 20.496897774419352,
            },
        ]
        if (this.markersFiltCountry == i){
            this.markersFiltCountry = undefined
        }else{
            countries.map(country => {
                if(country.name == i)
                this.center = {
                    lat: country.lat,
                    lng: country.lng,            
                }
            })
            this.markersFiltCountry = i
        }

    }
    changeSectionActiveMarker(i){
        this.sectionActiveMarker = i
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