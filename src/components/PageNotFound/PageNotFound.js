// Adding necessary file
import React from 'react';
import './notfound.css'
import errorImg from '../../images/notfound.png'
import { useHistory } from 'react-router';

// PageNotFound component Start
const PageNotFound = () => {
    const history = useHistory()
    const backToHome = () => {
        history.push('/home')
    }
    return (
        <div className='error-page pb-4'>
            <img src={errorImg} alt="" />
            <button onClick={backToHome} className='btn btn-danger mb-5 mt-3'>Back To HomePage</button>
        </div>
    );
};

export default PageNotFound;

// PageNotFound component End