import React from 'react';
import './Footer.css'

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
                                <i class="fab fa-facebook-square"></i>
                                <i class="fab fa-youtube-square"></i>
                                <i class="fab fa-twitter-square"></i>
                                <i class="fab fa-linkedin"></i>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;