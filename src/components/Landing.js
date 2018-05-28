import React, { Component } from 'react';
import './../App.css';

class Landing extends Component {
  render() {
    return (
      <div className="maincontainer">
        <div className="container-fluid landingpage">

          <div className="row hw100 no-margin">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 hw100 col-align">
              <div className="App">
                <header className="App-header">
                  <h6 className="black"> Hello</h6>
                  <h1 className="black">I'm </h1>
                  <h1 className="App-title">Nitheesh Salian</h1>
                  <h4 className="black"> Full Stack developer</h4>
                </header>
              </div>
            </div>
            <div className="col-4 hw100">
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Landing;
