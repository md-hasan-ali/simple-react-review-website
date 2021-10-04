// Adding necessary file
import React from 'react';
import './Footer.css'

// Footer Component Start 
const Footer = () => {
    return (
        <footer className='Footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h4>Let's Develop your Skils</h4>
                        <p>Copyright &copy; 2021</p>
                    </div>
                    <div className="col-md-6">
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
                </div>
            </div>
        </footer>
    );
};

export default Footer;

// Footer Component End