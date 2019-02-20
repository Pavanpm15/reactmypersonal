import React, { Component } from 'react';
import './../App.css';
import * as FontAwesome from 'react-icons/lib/fa';

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = { progress: 0.7 }
    }
    render() {
        return (
            <div className="contactcontainer">
                <div className="container-fluid">
                <div className="row justify-content-center">
                        <div className="col-8 align-self-center">
                            <h2 className="App-title white aboutme">EDUCATION & JOBS</h2>
                            <h4 className="white"><span className="red">2012-2016 :</span>B.E. in Computer Science & Engineering</h4>
                            <h6 className="white">Vishveshwarya institute of technology Belgaum</h6>

                            <h4 className="white"><span className="red">2016-present :</span>Software Developer</h4>
                            <h6 className="white">Skiploop Labs Pvt Ltd.</h6>

                            <a className="alinks" href="https://in.linkedin.com/in/nitheeshsalian" target="_blank" rel="noopener noreferrer"> <FontAwesome.FaLinkedinSquare /></a>
                            <a className="alinks" href="https://github.com/nitheeshsalian" target="_blank" rel="noopener noreferrer"> <FontAwesome.FaGithubSquare /></a>
                            <a className="alinks" href="https://stackoverflow.com/users/6931275/nitheeshsalian" target="_blank" rel="noopener noreferrer"> <FontAwesome.FaStackOverflow /></a>
                            <a className="alinks" href="https://stackoverflow.com/users/6931275/nitheeshsalian" target="_blank" rel="noopener noreferrer"> <FontAwesome.FaSkype /></a>
                            <a className="alinks" href="https://www.facebook.com/Nitheeshsalian" target="_blank" rel="noopener noreferrer"> <FontAwesome.FaFacebookOfficial /></a>
                            <a className="alinks" href="https://twitter.com/nitheeshsalian" target="_blank" rel="noopener noreferrer"> <FontAwesome.FaTwitterSquare /></a>
                            <a className="alinks" href="https://www.instagram.com/nitheeshsalian/" target="_blank" rel="noopener noreferrer"> <FontAwesome.FaInstagram /></a>
                            <a className="alinks" href="https://www.pinterest.co.uk/nitheeshsalian/" target="_blank" rel="noopener noreferrer"> <FontAwesome.FaPinterestSquare /></a>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-xs-12 align-self-center">
                            <h2 className="App-title white aboutme">CONTACT</h2>
                            <div className="row">
            
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-5-0">
                                        <div className="contactcard">
                                        <div className="acontact"><FontAwesome.FaLocationArrow /></div>
                                        <span className="ared"> #26 Behind Pepper's Restaurant, Sri Ram temple road Ejipura Bengaluru - 560097</span> 
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-5-0">
                                        <div className="contactcard">
                                        <div className="acontact"><FontAwesome.FaPhoneSquare /></div>
                                        <span className="ared"> +91 8197803551</span> 
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-5-0">
                                        <div className="contactcard">
                                        <div className="acontact"><FontAwesome.FaEnvelopeSquare /></div>
                                        <span className="ared">nitheeshsalian@gmail.com</span> 
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
export default Contact;