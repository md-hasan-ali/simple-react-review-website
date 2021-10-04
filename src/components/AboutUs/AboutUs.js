import React from 'react';
import img from '../../images/about.jpg'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <div className='about-page'>
                <h2 className='pb-5 title'>Abour Us</h2>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h3>About Me</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex maiores eius ullam cumque vero placeat consequuntur quasi, repudiandae voluptates hic debitis id delectus repellendus soluta exercitationem tempora eaque, a velit!</p>
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