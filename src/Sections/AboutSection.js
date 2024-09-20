import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/global.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

const AboutSection = () => {
    return (
        <div className="d-flex row section justify-content-center" id="about">
            <h2 className="section-title">About Me</h2>
            <p className="col-md-9 mt-3 text-center fs-5">
                As a developer with a passion for excellence, I am committed to continuous learning and embracing new technologies. Driven by a deep-seated desire to leverage my knowledge, skills, and youthful enthusiasm, I strive to create the best products possible.
            </p>
            <h2 className="section-title" style={{marginTop: "50px"}}>Education</h2>
            <div className="col-md-7 mt-3 education">
                <div className="d-flex justify-content-between">
                    <p className="fs-5">Information Technologies</p>
                    <span className="full-time align-self-center">Full Time</span>
                </div>

                <div className="d-flex justify-content-between education-info">
                    <p className=""><i className="bi bi-building"></i> HCMC University of Technology and Education</p>
                    <p className=""><i className="bi bi-calendar3"></i> Sep 2022 - Now</p>
                </div>
                <hr className="mt-1" />
            </div>
        </div>
    )
}

export default AboutSection;

/* 

<div class="d-flex row section justify-content-center" id="about">
                <h2 class="section-title">About Me</h2>
                <p class="col-md-9 mt-3 text-center fs-5">
                    As a developer with a passion for excellence, I am committed to continuous learning and embracing new technologies. Driven by a deep-seated desire to leverage my knowledge, skills, and youthful enthusiasm, I strive to create the best products possible.
                </p>
                <h2 class="section-title" style="margin-top: 50px;">Education</h2>
                <div class="col-md-7 mt-3">
                    <div class="d-flex justify-content-between">
                        <p class="fs-5">Infomation Technologies</p>
                        <span class="full-time align-self-center">Full Time</span>
                    </div>

                    <div class="d-flex justify-content-between education-info">
                        <p class=""><i class="bi bi-building"></i> HCMC University of Technology and Education</p>
                        <p class=""><i class="bi bi-calendar3"></i> Sep 2022 - Now</p>
                    </div>
                    <hr class="mt-1">
                </div>
            </div>
*/