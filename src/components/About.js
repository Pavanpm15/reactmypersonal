import React, { Component } from 'react';
import './../App.css';
import { Line } from 'rc-progress';

class About extends Component {
    constructor(props) {
        super(props)
        this.state = { progress: 0.7 }
    }
    render() {
        return (
            <div className="aboutcontainer">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 align-self-center">
                            <h2 className="App-title white aboutme">About Me</h2>
                            <h6 className="white">Hi i'am Nitheesh Salian Full Stack Web Developer from Bengaluru.</h6>
                            <h6 className="white p-b-5">I have serious passion for UI development, user experiences and Backend development.</h6>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 align-self-center">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <h3 className="white"> AngularJs</h3>
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 linealign">
                                    <Line percent="80" strokeWidth="4" strokeColor="#D3D3D3" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <h3 className="white"> NodeJs</h3>
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 linealign">
                                    <Line percent="70" strokeWidth="4" strokeColor="#D3D3D3" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <h3 className="white"> ExpressJs</h3>
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 linealign">
                                    <Line percent="60" strokeWidth="4" strokeColor="#D3D3D3" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <h3 className="white"> MongoDB</h3>
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 linealign">
                                    <Line percent="70" strokeWidth="4" strokeColor="#D3D3D3" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <h3 className="white"> HTML</h3>
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 linealign">
                                    <Line percent="85" strokeWidth="4" strokeColor="#D3D3D3" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-4">
                                    <h3 className="white"> CSS</h3>
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 linealign">
                                    <Line percent="65" strokeWidth="4" strokeColor="#D3D3D3" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <h3 className="white"> React</h3>
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 linealign">
                                    <Line percent="30" strokeWidth="4" strokeColor="#D3D3D3" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <h3 className="white"> Bootsrap</h3>
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 linealign">
                                    <Line percent="70" strokeWidth="4" strokeColor="#D3D3D3" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <h3 className="white"> JavaScript</h3>
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 linealign">
                                    <Line percent="60" strokeWidth="4" strokeColor="#D3D3D3" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <h3 className="white"> jQuery</h3>
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 linealign">
                                    <Line percent="70" strokeWidth="4" strokeColor="#D3D3D3" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <h3 className="white"> TypeScript</h3>
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 linealign">
                                    <Line percent="65" strokeWidth="4" strokeColor="#D3D3D3" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <h3 className="white"> RESTAPI</h3>
                                </div>
                                <div className="col-8 linealign">
                                    <Line percent="50" strokeWidth="4" strokeColor="#D3D3D3" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <h3 className="white"> ReactNative</h3>
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 linealign">
                                    <Line percent="30" strokeWidth="4" strokeColor="#D3D3D3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;