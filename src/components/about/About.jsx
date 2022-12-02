import React from 'react';
import ME from '../../assets/profiles.jpeg';
import './about.css';
import { FaAward } from 'react-icons/fa';
//import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  console.log();
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <input type="image" img src={ME} alt="photo" />
            {/*  <img src={ME} alt="photo" /> */}
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>8 projects completed</small>
            </article>
          </div>
          <p>test test test test</p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
