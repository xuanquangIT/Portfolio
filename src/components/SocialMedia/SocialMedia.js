import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import fbIcon from '../../assets/images/social-media/fb.png';
import linkedInIcon from '../../assets/images/social-media/linked.svg';
import githubIcon from '../../assets/images/social-media/github.svg';

const SocialMedia = () => {
    const socialMediaItems = [
        { href: "https://www.facebook.com/vuxuanquang2004", imgSrc: fbIcon, imgAlt: "Facebook" },
        { href: "https://www.linkedin.com/in/vuxuanquang04/", imgSrc: linkedInIcon, imgAlt: "Linkedin" },
        { href: "https://github.com/xuanquangIT", imgSrc: githubIcon, imgAlt: "Github" }
    ];

    return (
        <ul className="navbar-nav ms-auto">
            {socialMediaItems.map((item, index) => (
                <li key={index} className="nav-item pe-1">
                    <a href={item.href} className="nav-link">
                        <img src={item.imgSrc} alt={item.imgAlt} width="30px" height="30px" />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default SocialMedia;