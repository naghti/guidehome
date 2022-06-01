import logo from './logo.svg';
import './App.css';
import SimpleMap from "./Hi";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Index from "./pages/Index";
import Section from "./pages/Section";
import Place from "./pages/Place";
import Photos from "./pages/Photos";
import Browsing from "./pages/Browsing";
import Settings from "./pages/Settings";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {observer} from "mobx-react-lite";
import state from "./state/state";
import PlaceMap from "./components/maps/PlaceMap";
import React from "react";
import Loader from './components/Loader';

let AppMobile =  observer(() =>  {
  return (
    <div className="App" style={{display:'flex',flexWrap:'wrap',width:'100%', height: state.openMarker != undefined ? '100vh' : '100%',overflow: state.openMarker != undefined ? 'hidden' : 'auto'}}>
        <Router>
            <TransitionGroup>
                {
                    state.settings
                        ?
                            <CSSTransition
                                key={1}
                                timeout={200}
                                classNames="item"
                            >
                                <Settings/>
                            </CSSTransition>
                        :
                            <></>
                }
                {
                    state.BrowsingOpen
                        ?
                        <CSSTransition
                            key={2}
                            timeout={200}
                            classNames="item"
                        >
                            <Browsing/>
                        </CSSTransition>
                        :
                        <></>
                }{
                    state.openMarker != undefined && state.openMarker != false
                        ?
                        <CSSTransition
                            key={2}
                            timeout={200}
                            classNames="item"
                        >
                            <PlaceMap
                                marker={state.openMarker}
                            />
                        </CSSTransition>
                        :
                        <></>
                }
                {
                    state.loader
                        ?
                        <CSSTransition
                            key={2}
                            timeout={200}
                            classNames="item"
                        >
                            <Loader/>
                        </CSSTransition>
                        :
                        <></>
                }
            </TransitionGroup>
            <Routes>
                <Route path='/' element={<Index/>} />
                <Route path='/section/:section' element={<Section/>} />
                <Route path='/:section/:id' element={<Place/>} />
                <Route path='/:section/photos/:id' element={<Photos/>} />
            </Routes>
        </Router>
    </div>
  );
})

export default AppMobile;
