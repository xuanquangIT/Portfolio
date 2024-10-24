import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/global.scss';
import ProjectItem from '../components/ProjectItems/ProjectItem'; // Adjust path as necessary

const ProjectsSection = () => {
    const projectData = [
        {
            href: "https://quangvu.azurewebsites.net/JoinEmailList/",
            imgSrc: require("../assets/images/projects/JoinEmailList.jpg"),
            imgAlt: "Join Email List",
            title: "Join Email List",
            description: "A simple web application that allows users to join an email list.",
            codeLink: "https://github.com/xuanquangIT/JoinEmailList"
        },
        {
            href: "https://quangvu.azurewebsites.net/MurachSurvey/",
            imgSrc: require("../assets/images/projects/MurachSurvey.png"),
            imgAlt: "Murach Survey",
            title: "Murach Survey",
            description: "A simple web application that allows users to take a survey and view the results.",
            codeLink: "https://github.com/xuanquangIT/MurachSurvey"
        },
        {
            href: "https://quangvu.azurewebsites.net/ch05-ex1-email/",
            imgSrc: require("../assets/images/projects/JoinEmailList.jpg"),
            imgAlt: "CH05-EX1-EMAIL",
            title: "CH05-EX1-EMAIL",
            description: "Print and log the debug action in project Join Email List.",
            codeLink: "https://github.com/xuanquangIT/ch05_ex1_email"
        },
        {
            href: "https://quangvu.azurewebsites.net/ch05-ex2-email/",
            imgSrc: require("../assets/images/projects/JoinEmailList.jpg"),
            imgAlt: "CH05-EX2-EMAIL",
            title: "CH05-EX2-EMAIL",
            description: "Use Annotation instead of web.xml in project Join Email List.",
            codeLink: "https://github.com/xuanquangIT/ch05-ex2-email"
        },
        {
            href: "https://quangvu.azurewebsites.net/ch06-ex1-email/",
            imgSrc: require("../assets/images/projects/JoinEmailList.jpg"),
            imgAlt: "CH06-EX1-EMAIL",
            title: "CH06-EX1-EMAIL",
            description: "Modify the JSPs that are used by the email application.",
            codeLink: "https://github.com/xuanquangIT/ch06-ex1-email"
        },
        {
            href: "https://quangvu.azurewebsites.net/ch06-ex2-survey/",
            imgSrc: require("../assets/images/projects/MurachSurvey.png"),
            imgAlt: "CH06-EX2-SURVEY",
            title: "CH06-EX2-SURVEY",
            description: "Modify the HTML document for the Email List application, and you’ll create a new servlet that responds to the HTML document.",
            codeLink: "https://github.com/xuanquangIT/ch06-ex2-survey"
        },
        {
            href: "https://quangvu.azurewebsites.net/ch08-ex1-email/",
            imgSrc: require("../assets/images/projects/JoinEmailList.jpg"),
            imgAlt: "CH08-EX1-EMAIL",
            title: "CH08-EX1-EMAIL",
            description: " enhance the Email List application so it uses EL to display attributes",
            codeLink: "https://github.com/xuanquangIT/ch08_ex1_email"
        },
        {
            href: "https://quangvu.azurewebsites.net/ch09_ex1_download/",
            imgSrc: require("../assets/images/projects/donwload.png"),
            imgAlt: "CH09-EX1-PRODUCT",
            title: "CH09-EX1-PRODUCT",
            description: "Use JSTL in the Download application .",
            codeLink: "https://github.com/xuanquangIT/ch09_ex1_download"
        },

        {
            href: "https://quangvu.azurewebsites.net/Cart",
            imgSrc: require("../assets/images/projects/cart.png"),
            imgAlt: "CH09-EX2-CART",
            title: "CART SESSION COOKIES",
            description: "Simple project about cart to study Session and Cookie.",
            codeLink: "https://github.com/xuanquangIT/cart-session-cookies.git"
        },

        {
            href: "https://quangvu.azurewebsites.net/SQLGateway/",
            imgSrc: require("../assets/images/projects/SqlGateway.png"),
            imgAlt: "SQL Gateway",
            title: "SQL Gateway",
            description: "Simple project to learn about jdbc and mysql in web",
            codeLink: "https://github.com/xuanquangIT/SqlGateway.git"
        },

        {
            href: "https://quangvu.azurewebsites.net/ConnectionPool/",
            imgSrc: require("../assets/images/projects/ConnectionPool.png"),
            imgAlt: "Connection Pool",
            title: "Connection Pool",
            description: "An example of Java ConnectionPool Use HikariCP",
            codeLink: "https://github.com/xuanquangIT/ConnectionPool.git"
        },
        {
            href: "https://quangvu.azurewebsites.net/JSPExample/",
            imgSrc: require("../assets/images/projects/ConnectionPool.png"),
            imgAlt: "JSP Example",
            title: "JSP Example",
            description: "A simple project to learn about JSP",
            codeLink: "https://github.com/xuanquangIT/JSP-Example.git"
        },
        {
            href: "https://quangvu.azurewebsites.net/MailSender/",
            imgSrc: require("../assets/images/projects/ConnectionPool.png"),
            imgAlt: "Mail Example",
            title: "Mail Example",
            description: "A simple project to learn about sending email in Java",
            codeLink: "/"
        }
    ];

    return (
        <div className="row section d-flex justify-content-center" id="projects">
            <h2 className="section-title">Projects</h2>
            <p className="text-center fs-5 description-text mb-3">Things I’ve built</p>
            <div className="row row-cols-1 row-cols-md-4 g-4" style={{ marginBottom: '-15px' }}>
                {projectData.map((project, index) => (
                    <ProjectItem
                        key={index}
                        href={project.href}
                        imgSrc={project.imgSrc}
                        imgAlt={project.imgAlt}
                        title={project.title}
                        description={project.description}
                        codeLink={project.codeLink}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectsSection;
