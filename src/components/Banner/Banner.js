// Adding necessary file
import React from 'react';
import { useHistory } from 'react-router';
import './Banner.css'

const Banner = () => {
    const history = useHistory()
    const handleButton = () => {
        history.push('/contact')
    }
    return (
        <div className='banner-container'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="banner-content">
                            <h1>Programming Learning Website</h1>
                            <h4>Let's devlop your future with codding</h4>
                            <button onClick={handleButton} className='btn btn-danger'>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;