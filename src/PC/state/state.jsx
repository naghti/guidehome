import {makeAutoObservable} from "mobx";
import Sidebar from "../components/Sidebar";

class State {
    markersFilt = true;
    markersFiltCountry = true;
    openMarkersPreview = true;
    openAside = true;
    loader = false

    userGeolocation = undefined
    center = {
        lat: 56.491098,
        lng: 84.962755,
    }
    constructor() {
        makeAutoObservable(this)
    }
    changeUserGeolocation(lat,lng){
        this.userGeolocation = {
            lat: lat,
            lng: lng,
        }
    }
    changeMarkersFilt(i){
        this.markersFilt = i
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
        countries.map(country => {
            if(country.name == i)
            this.center = {
                lat: country.lat,
                lng: country.lng,            
            }
        })
        this.markersFiltCountry = i
    }
    changeLoader(i){
        this.loader = i
    }
    changeOpenMarkersPreview(i){
        this.openMarkersPreview = i
    }
    changeOpenAside(){
        this.openAside = !this.openAside
    }
    changeCenter(lat,lng){
        console.log(this.center)
        this.center = {
            lat: lat,
            lng: lng,
        }
    }
}
export default new State()