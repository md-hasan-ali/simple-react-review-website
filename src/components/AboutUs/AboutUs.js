// Adding necessary file
import React from 'react';
import img from '../../images/about.jpg'
import './AboutUs.css'

// About Us Component Start
const AboutUs = () => {
    return (
        <div>
            <div className='about-page'>
                <h2 className='pb-5 title'>Abour Us</h2>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h3>About Me</h3>
                            <p>Hi,I am Hasan Ali and I am a Web developer of JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation</p>
                            <button className='btn btn-danger'>About Us</button>
                        </div>
                        <div className="col-md-6">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default AboutUs;
// About Us Component End