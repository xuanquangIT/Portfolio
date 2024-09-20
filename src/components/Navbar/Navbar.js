import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/global.scss';

const Navbar = ({margin="m-auto"}) => { 
    const navItems = [
        { href: "#home", text: "Home" },
        { href: "#about", text: "About" },
        { href: "#skills", text: "Skills" },
        { href: "#projects", text: "Projects" },
        { href: "#contact", text: "Contact" },
    ];
    
    return (
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className={`navbar-nav ${margin}`}>
                {navItems.map((item, index) => (
                    <li key={index} className={`nav-item ${item.text ? 'pe-5 fs-5' : 'pe-1'}`}>
                        <a href={item.href} className="nav-link">
                            {item.text ? item.text : <img src={item.imgSrc} alt={item.imgAlt} width="30px" height="30px" />}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navbar;


