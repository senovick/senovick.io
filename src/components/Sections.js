import React from 'react'
import './styles/Section.css'
import project from './assets/project.jpg';
import { Link } from 'react-router-dom';
const Section = () => {
    return (
        <>
            <section className='main-section'>
                <div className="container">
                    <div className="texts">
                        <h1>Hello My Name is</h1><h1 className="h1-big">Sean Novick</h1>
                        <p>Professional Full-Stack Developer with over 8 years of coding experience</p>                        
                        <Link to='/projects'>
                            <button className='text-button'>My Projects</button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className='section-2'>
            <h1 className='about-me'>About Me</h1>
            <div className="container-2">
                <div className="image-cont">
                    <img src={project} alt="" />
                </div>

                <div className="text-2">
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
        </>        
    )
}

export default Section
