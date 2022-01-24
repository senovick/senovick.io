import React from 'react'
import './styles/Projects.css'

const Projects = () => {
    return (
        <section className='main-section'>
            <h2 className='section-title'>Projects</h2>
            <div className='grid-container'>
                <div className="blog-card">
                    <img src="" alt="" />
                    <div className="title-content">
                        <hr />
                        <h3>Project title</h3>
                    </div>
                    <p className="card-info">
                        Description
                    </p>
                    <div className="title-content">Stack</div>
                </div>
            </div>
        </section>
    )
}

export default Projects
