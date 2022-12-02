import React from 'react';
import './experience.css';
import { GrNode } from 'react-icons/gr';
import { FaJava, FaReact } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { BsBootstrap } from 'react-icons/bs';
import { AiOutlineAntDesign } from 'react-icons/ai';

const Experience = () => {
  return (
    <section>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineAntDesign className="experience__details-icons" />
              <div>
                <h4>AntDesign</h4>
                <small className="text-light">Score 8/10</small>
              </div>
            </article>
            <article className="experience__details">
              <DiJavascript1 className="experience__details-icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Score 8/10</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBootstrap className="experience__details-icons" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Score 7/10</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icons" />
              <div>
                <h4>React</h4>
                <small className="text-light">Score 8/10</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaJava className="experience__details-icons" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Score 7.5/10</small>
              </div>
            </article>
            <article className="experience__details">
              <GrNode className="experience__details-icons" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Score 8/10</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
