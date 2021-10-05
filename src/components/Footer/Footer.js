// Adding necessary file
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

// Footer Component Start 
const Footer = () => {
    return (
        <footer className='Footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4>Let's Develop your Skils</h4>
                        <p>Copyright &copy; 2021</p>
                    </div>

                    <div className="col-md-4">
                        <div className="social-icon">
                            <h4>Social Icon</h4>
                            <ul>
                                <i className="fab fa-facebook-square"></i>
                                <i className="fab fa-youtube-square"></i>
                                <i className="fab fa-twitter-square"></i>
                                <i className="fab fa-linkedin"></i>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer-menu">
                            <h4>Footer Menu</h4>
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

// Footer Component End