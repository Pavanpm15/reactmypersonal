import React, { Component } from 'react';
import './../App.css';

class Mywork extends Component {
    render() {
        return (
            <div className="myworkcontainer">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-10 align-self-center">
                            <h2 className="App-title white aboutme">Portfolio</h2>
                            <div className="row no-margin">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-5">

                                    <div className="card">
                                        <div className="image">
                                            <div className="navigo" >
                                                <div className="imageshadow"></div>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <div className="center">
                                                <h1>Navigo<br /></h1>
                                                <p>Navigo is a cloud based compliance management tool to help mid-market organisations track and manage their regulatory and compliance requirements in real time.</p>
                                                <a href="http://getnavigo.com" target="_blank" rel="noopener noreferrer">www.getnavigo.com</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-5">
                                    <div className="card">
                                        <div className="image">
                                            <div className="stohke" >
                                                <div className="imageshadow"></div>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <div className="center">
                                                <h1>Stohke<br /></h1>
                                                <p>Stohke is a social platform that brings the world’s best brands, athletes and causes to your fingertips. Browse feeds that inspire you into action every day.</p>
                                                <a href="http://stohke.com" target="_blank" rel="noopener noreferrer">www.stohke.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-5">
                                <div className="card">
                                        <div className="image">
                                            <div className="click2race" >
                                                <div className="imageshadow"></div>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <div className="center">
                                                <h1>Click2race<br /></h1>
                                                <p>Click2race is your one stop solution to register for all our happening races in India. Enter your details once and enjoy the benefits of quick check-ins across all our races. We will ensure that the process is smooth and efficient.</p>
                                                <a href="http://click2race.com" target="_blank" rel="noopener noreferrer">www.click2race.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mywork;