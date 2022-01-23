import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
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
      
    );
};

export default Home;
