import logo from './logo.svg';
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Index from "./pages/Index";
import Section from "./pages/Section";
import Place from "./pages/Place";
import Photos from "./pages/Photos";
import React, { Component }  from 'react';

let App = () => {
  if (window.innerWidth < 600){
    var meni_1 = 'http://m.accessible-city.ru';
    window.location.href = meni_1;
  }
  return (
    <div className="App" style={{display:'flex',flexWrap:'wrap',width:'100%'}}>
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
}

export default App;
