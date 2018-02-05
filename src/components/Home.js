import React, { Component } from 'react';
import App from './App'
import Map  from './Map'
import './Home.css';
import Bootstrap from "bootstrap/dist/css/bootstrap.css";


export default (props) => {
  return (
      <div className="Home">

        <aside className="aside">
          <div className="App">
            <App />
          </div>
        </aside>

        <div className="Map">
          <Map
            zoom={12}
            center={{ lat:50.4501, lng:30.523400000000038 }}
            containerElement={ <div style={{ height: '100vh' }} /> }
            mapElement={ <div style={{ height: '100vh' }} /> }
           />
        </div>

      </div>
    );
  }
