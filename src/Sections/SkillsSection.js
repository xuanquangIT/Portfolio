import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/global.scss';

// Define the skills data with proper paths to tech-icons
const listSkills = [
    {
        title: 'Fullstack Developer',
        image: require('../assets/images/tech-icons/Code.png'),
        skills: [
            require('../assets/images/tech-icons/html5.png'),
            require('../assets/images/tech-icons/css.png'),
            require('../assets/images/tech-icons/javascript.png'),
            require('../assets/images/tech-icons/bootstrap.png'),
            require('../assets/images/tech-icons/sass.png'),
            require('../assets/images/tech-icons/react.png'),
            require('../assets/images/tech-icons/Java.png'),
            require('../assets/images/tech-icons/github.png')
        ]
    },
    {
        title: 'Data Engineer',
        image: require('../assets/images/tech-icons/Data.png'),
        skills: [
            require('../assets/images/tech-icons/python.png'),
            require('../assets/images/tech-icons/Postgresql.png'),
            require('../assets/images/tech-icons/Mysql.png'),
            require('../assets/images/tech-icons/airflow.png'),
            require('../assets/images/tech-icons/Hadoop.png'),
            require('../assets/images/tech-icons/spark.png'),
            require('../assets/images/tech-icons/kafka.png')
        ]
    }
];

// SkillsCard component to display individual skill cards
const SkillsCard = ({ title, image, skills }) => {
    return (
        <div className="col-md-4 m-4 rounded-3 card p-4" style={{ backgroundColor: "#363636" }}>
            <div className="d-flex flex-column">
                <img src={image} className="align-self-center" alt={title} height="80px" width="80px" />
                <h3 className="text-center mt-3 text-light">{title}</h3>
            </div>
            <div className="">
                <div className="row d-flex justify-content-between mt-4">
                    {skills.slice(0, 3).map((skill, index) => (
                        <img key={index} src={skill} alt={title} style={{ height: '70px', width: '90px' }} />
                    ))}
                </div>
                <div className="row d-flex justify-content-between mt-4">
                    {skills.slice(3, 6).map((skill, index) => (
                        <img key={index} src={skill} alt={title} style={{ height: '70px', width: '90px' }} />
                    ))}
                </div>
                <div className="row d-flex mt-4">
                    {skills.slice(6).map((skill, index) => (
                        <img key={index} src={skill} alt={title} style={{ height: '73px', width: '90px' }} className="me-3" />
                    ))}
                </div>
            </div>
        </div>
        
    );
};

// SkillsSection component to render the skills section
const SkillsSection = () => {
    return (
        <div className="row section d-flex justify-content-center" id="skills">
            <div className="col-11">
                <h2 className="section-title">My Skills</h2>
                <div className="row d-flex space justify-content-center">
                    {listSkills.map((skillSet, index) => (
                        <SkillsCard key={index} title={skillSet.title} image={skillSet.image} skills={skillSet.skills} />
                    ))}
                    
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;

/* 

  <div class="row section d-flex justify-content-center" id="skills">
        <div class="col-11">
            <h2 class="section-title">My Skills</h2>
            <div class="row d-flex space justify-content-center">
                <div class="col-md-4 mt-4 rounded-3 card p-4">
                    <div class="d-flex flex-column">
                        <img src="assets/images/Code.png" class="align-self-center" alt="Web Skill" height="80px" width="80px">
                        <h3 class="text-center mt-3 text-light">Fullstack Developer</h3>
                    </div>

                    <div class="">
                        <div class="row d-flex justify-content-between mt-4">
                            <img src="assets/images/html5.png" alt="html5" style="height: 70px; width: 90px;">
                            <img src="assets/images/css.png" alt="html5" style="height: 70px; width: 90px;">
                            <img src="assets/images/javascript.png" alt="html5" style="height: 70px; width: 90px;">
                        </div>
                        <div class="row d-flex justify-content-between mt-4">
                            <img src="assets/images/bootstrap.png" alt="html5" style="height: 70px; width: 90px;">
                            <img src="assets/images/sass.png" alt="html5" style="height: 70px; width: 90px;">
                            <img src="assets/images/react.png" alt="html5" style="height: 70px; width: 100px;">
                        </div>
                        <div class="row d-flex  mt-4">
                            <img src="assets/images/java-1.png" alt="html5" style="height: 73px; width: 73px;" class="me-3">
                            <img src="assets/images/github.svg" alt="html5" style="height: 70px; width: 90px;" class="ms-4">
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-4 mt-4 rounded-3 card p-4">
                    <div class="d-flex flex-column">
                        <img src="assets/images/Data.png" class="align-self-center" alt="Web Skill" height="80px" width="80px">
                        <h3 class="text-center mt-3 text-light">Data Engineer</h3>
                    </div>

                    <div class="">
                        <div class="row d-flex justify-content-between mt-4">
                            <img src="assets/images/python.png" alt="html5" style="height: 70px; width: 90px;">
                            <img src="assets/images/Postgresql.png" alt="html5" style="height: 70px; width: 90px;">
                            <img src="assets/images/Mysql.png" alt="html5" style="height: 70px; width: 90px;">
                        </div>
                        <div class="row d-flex justify-content-between mt-4">
                            <img src="assets/images/airflow.png" alt="html5" style="height: 100px; width: 81px;">
                            <img src="assets/images/Hadoop.png" alt="html5" style="height: 80px; width: 100px;">
                            <img src="assets/images/spark.png" alt="html5" style="height: 66px; width: 120px;">
                        </div>
                        <div class="row d-flex  mt-4">
                            <img src="assets/images/kafka.png" alt="html5" style="height: 52px; width: 120px;" class="me-3">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
*/