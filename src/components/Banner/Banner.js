// Adding necessary file
import React from 'react';
import { useHistory } from 'react-router';
import './Banner.css'

// Banner Component Start 
const Banner = () => {
    const history = useHistory()
    const handleButton = () => {
        history.push('/contact')
    }
    const handleButton1 = () => {
        history.push('/services')
    }
    return (
        <div className='banner-container'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="banner-content">
                            <h1>Programming Learning Website</h1>
                            <h4>Let's devlop your future with codding</h4>
                            <button onClick={handleButton} className='btn btn-danger me-2'>Contact Us</button>

                            <button onClick={handleButton1} className='btn btn-success'>Our Services</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
// Banner Component End