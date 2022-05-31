import {makeAutoObservable} from "mobx";
import Sidebar from "../components/Sidebar";

class State {
    markersFilt = true;
    markersFiltCountry = 'Томск';
    openMarkersPreview = true;
    openAside = true;
    loader = false

    center = {
        lat: 56.491098,
        lng: 84.962755,
    }
    constructor() {
        makeAutoObservable(this)
    }
    changeMarkersFilt(i){
        this.markersFilt = i
    }
    changeMarkersFiltCountry(i){
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