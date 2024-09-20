import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/global.scss';
import myimage from '../assets/images/my-image/myimage.png';

const HomeSection = () => {
    return (
        <div className="row section d-flex flex-row float-up" id="home">
            <div className="d-flex col-md-6">
                <h1 className="introduction text-light fw-bold lh-2 align-self-center">
                    Hi 👋,<br/>
                    My name is<br/>
                    <span className="gradient-text">QUANG VU</span> <br />
                    I am a Web Developer<br /> 
                    & a Data Engineer
                </h1>
            </div>

            <div className="d-flex col-md-6 justify-content-end">
                <img src={myimage} alt="Hero" height="300px" />
            </div>
        </div>
    );
}

export default HomeSection;

/*

 <div class="row section d-flex flex-row float-up" id="home">
    <div class="d-flex col-md-6">
        <h1 class="introduction text-light fw-bold lh-2 align-self-center">
            Hi 👋,<br>
            My name is<br>
            <span class="gradient-text">QUANG VU</span> <br>
            I am a Web Developer<br> 
            & a Data Engineer
        </h1>
    </div>

    <div class="d-flex col-md-6 justify-content-end">
        <img src="assets/images/myimage.png" alt="Hero" height="300px">
    </div>
</div>

*/