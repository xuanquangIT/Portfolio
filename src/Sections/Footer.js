import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar/Navbar';
import logo from '../assets/images/logo.png';
import SocialMedia from '../components/SocialMedia/SocialMedia';
import '../assets/styles/global.scss';

function Footer(){
    return ( 
        <footer style={{ marginTop: '100px' }}>
            {/* Logo and contact */}
            <nav className="navbar navbar-expand-sm navbar-dark sticky-top">
                <div className="container" style={{ padding: 0 }}>
                    <a href="#" className="navbar-brand">
                    <img src={logo} alt="Logo" width="66px" height="78px" />
                    </a>
                    
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ms-auto description-text">
                            <li className="navbar-text pe-5 fs-5">+84913363971</li>
                            <li className="navbar-text pe-5 fs-5">vuxuanquang04@gmail.com</li>
                            <SocialMedia/>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Navbar and copyright */}

            <hr className="text-light"/>
            <nav className="navbar navbar-expand-sm navbar-dark sticky-top">
                <div className="container" style={{ padding: 0 }}>
                    <Navbar margin="me-auto"/>
                </div>

                <div className="d-flex justify-content-end">
                        <p className="description-text mt-3">© Designed and built by Pavan MG with Love & Coffee</p>
                </div>
            </nav>
        </footer>
    )
}

export default Footer;



/*
<footer style="margin-top: 100px;">
            <nav class="navbar navbar-expand-sm  navbar-dark">
                <div class="container" style="padding: 0;">
                    <a href="#" class="navbar-brand">
                        <img src="assets/images/logo.png" alt="Logo" width="66px" height="78px">
                    </a>

                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav ms-auto description-text">
                            <li class="navbar-text pe-5 fs-5">+84913363971</li>
                            <li class="navbar-text pe-5 fs-5">vuxuanquang04@gmail.com</li>
                            <li class="nav-item pe-1">
                                <a href="https://www.facebook.com/vuxuanquang2004" class="nav-link">
                                    <img src="assets/images/fb.png" alt="Facebook" width="30px" height="30px">
                                </a>
                            </li>
                            <li class="nav-item pe-1">
                                <a href="https://www.linkedin.com/in/vuxuanquang04/" class="nav-link">
                                    <img src="assets/images/linked.svg" alt="Linkedin" width="30px" height="30px">
                                </a>
                            </li>
                            <li class="nav-item pe-1">
                                <a href="https://github.com/xuanquangIT" class="nav-link">
                                    <img src="assets/images/github.svg" alt="Github" width="30px" height="30px">
                                </a>
                            </li>
                        </ul>   
                    </div>
                </div>
            </nav>
            <hr>
            <nav class="navbar navbar-expand-sm  navbar-dark sticky-top">
                <div class="container" style="padding: 0;">
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item pe-5 fs-5"><a href="#home" class="nav-link">Home</a></li>
                            <li class="nav-item pe-5 fs-5"><a href="#about" class="nav-link">About</a></li>
                            <li class="nav-item pe-5 fs-5"><a href="#skills" class="nav-link">Skills</a></li>
                            <li class="nav-item pe-5 fs-5"><a href="#project" class="nav-link">Projects</a></li>
                            <li class="nav-item pe-5 fs-5"><a href="#contact" class="nav-link">Contact</a></li>
                        </ul>   
                    </div>
                    
                    <div class="d-flex justify-content-end">
                        <p class="description-text mt-3">© Designed and built by Pavan MG with Love & Coffee</p>
                    </div>
                </div>
              </nav>
        </footer>
*/