import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/global.scss';

const ContactSection = () => {
    return(
        <div className="row section text-center" id="contact" style={{marginTop: '200px'}}>
            <h2 className="description-text">For any questions please mail us:</h2>
            <h2 className="gradient-text">vuxuanquang04@gmail.com</h2>
        </div>
    )
}

export default ContactSection;