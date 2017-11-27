/*global $:true*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import './scss/app.scss';

// Component imports
import Home from './components/home';

// Image import
import loadImg from './images/loader2.gif';

class App extends Component {

  // 1. Render site-loader gif
  // 2. React Router component wraps all of the routes we are going to define - Archive and Home. Each route will be identified in a <Route> component. The <Route> component will take two properties: path and component. When a path matches the path given to the <Route> component, it will return the component specified.
  render() {
    return (
      <div>
        <div className="loaderSmall">
          <img className="loadingImg" src={loadImg}/>
        </div>
        <Router history={browserHistory} onUpdate={this.hashLinkScroll}>
          <Route path={'*'} component={Home} />
        </Router>
      </div>
    );
  };

  // When Component has rendered, window.addEventListener adds event "load" and calls handleLoad function
  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  // Fade out site-loader
  handleLoad() {
    $(".loaderSmall").delay(2000).fadeOut("slow");
  }
};

ReactDOM.render (
  <App/>,
  document.getElementById('app')
)

// Hot Module Replacement API (injecting code)
if (module.hot) {
	module.hot.accept();
}

export default App;
