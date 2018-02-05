import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import Bootstrap from "bootstrap/dist/css/bootstrap.css";

import registerServiceWorker from './registerServiceWorker';

class View extends Component {
  render(){
    return(
      <Home />
    )
  }
}

ReactDOM.render(<View />, document.getElementById('root'));
registerServiceWorker();
