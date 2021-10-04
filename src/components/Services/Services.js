import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [servicess, setServicess] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setServicess(data.slice(0, 4)))
    }, [])
    return (
        <div className='Services-area my-5'>
            <div className='container'>
                <h2 className='pb-5 title text-dark'>Our Services</h2>
                <Row xs={1} md={2} className="g-4">
                    {
                        servicess.map(service => <Service
                            key={service.key}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;