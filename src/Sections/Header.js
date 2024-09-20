import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar/Navbar';
import logo from '../assets/images/logo.png';
import SocialMedia from '../components/SocialMedia/SocialMedia';

function Header(){
    return ( 
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark sticky-top">
                <div className="container" style={{ padding: 0 }}>
                    <a href="#" className="navbar-brand">
                    <img src={logo} alt="Logo" width="66px" height="78px" />
                    </a>
                    <Navbar margin="ms-auto"/>
                    <SocialMedia/>
                </div>
            </nav>
        </header>
    )
}

export default Header;

