import React from 'react';
import project from './assets/project.jpg';
const About = () => {
  return (
    <section className='main-section'>
    <div className="container">
        <div className="image-cont">
            <img src={project} alt="" />
        </div>

        <div className="texts">
          <h1>About Me</h1>
            <p>Front-End Developer</p>
            <p>React js & Nodejs Developer</p>
            <p>UI & UX Designer</p>
            <p>MERN Stack Developer</p>
            <p>Worked for Google,Facebook,Amazon</p>
            <p>5 years of Developer Experience</p>
            <p>Good Management ,Communication</p>
        </div>
    </div>
    </section>        

  );
};

export default About;
