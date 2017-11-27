import React, { Component } from 'react';
const fs = require('fs');

// Component imports
// import Menu from './menu';

// Render home page
class Home extends Component {

  render() {
    return(
      <div className="home">
        <div className="background-img"></div>
        <div className="container">
          <main className="wrapper"></main>
        </div>
      </div>
    );
  };

  // componentDidMount() {
  //   // const words = open('/usr/share/dict/words', 'r').read().splitlines();
  //   fs.readFile('/usr/share/dict/words', (err, data) => {
  //     console.log(data.toString());
  //   })
  // }

  componentDidMount(){
    const myInit = {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         'Accept': 'application/json'
      }
    };

    fetch('/usr/share/dict/words', myInit)
    // fetch("/getProducts", myInit)
      .then((res) => {
        return res.json();
      })
      .catch(function(err) {
        console.log('Error MESSAGE: ' + err.message);
      });
  }
};

export default Home;
