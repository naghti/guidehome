import logo from './logo.svg';
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Index from "./pages/Index";
import Section from "./pages/Section";
import Place from "./pages/Place";
import Photos from "./pages/Photos";
import React, { Component }  from 'react';
import Loader from './components/Loader';
import state from './state/state';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { observer } from 'mobx-react-lite';

let AppPC = observer(() => {
  return (
    <div className="App" style={{display:'flex',flexWrap:'wrap',width:'100%'}}>
        <TransitionGroup>
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
        <Router>
            <Routes>
                <Route path='/' element={<Index/>} />
                <Route path='/section/:section' element={<Section/>} />
                <Route path='/:section/:id' element={<Place/>} />
                <Route path='/:section/photos/:id' element={<Photos/>} />
                <Route path='*' exact element={<Index/>} />
            </Routes>
        </Router>
    </div>
  );
})

export default AppPC;
