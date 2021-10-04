import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="banner-content">
                            <h1>Programming Learning Website</h1>
                            <h4>Let's devlop your future with codding</h4>
                            <button className='btn btn-danger'>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;