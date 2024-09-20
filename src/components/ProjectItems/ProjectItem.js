import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../assets/styles/global.scss';

const ProjectItem = ({ href, imgSrc, imgAlt, title, description, liveLink, codeLink }) => (
  <div className="col mb-2">
    <a href={href} target="_blank"  className="d-block text-decoration-none" style={{ color: 'inherit' }}>
      <div className="card p-0 project-item">
        <img src={imgSrc} className="card-img-top" alt={imgAlt} />
        <div className="card-body">
          <h5 className="card-title text-light fs-5">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between mt-2" style={{ fontSize: '15px' }}>
            <span className="text-light">
              <i className="bi bi-link-45deg"></i> Live Preview
            </span>
            <a href={codeLink} target="_blank"  className="text-light">
              <i className="bi bi-github"></i> View Code
            </a>
          </div>
        </div>
      </div>
    </a>
  </div>
);

export default ProjectItem;
