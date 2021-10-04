// Adding necessary file
import React from 'react';
import './ContactUs.css'
import image from '../../images/contact-img.jpg'

// Contact Us Conponent Start
const ContactUs = () => {
    return (
        <div className='contact-area'>
            <h2 className='pb-5 title'>Contact Us</h2>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="contact-form">
                            <input type="text" placeholder='Your Name' />
                            <input type="email" placeholder='Email' />
                            <input type="password" placeholder='Password' />
                            <textarea placeholder='Description' name="" id="" cols="30" rows="10"></textarea>
                            <button className='btn btn-primary'>Send Message</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contact-img">
                            <img className='w-100' src={image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

// Contact Us Conponent End