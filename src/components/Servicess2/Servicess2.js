import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Servicess2 = () => {
    const [cource, setCource] = useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setCource(data))
    }, [])
    return (
        <div className='all-services pb-5'>
            <h2 className='py-5 title text-dark'>Our All Services</h2>
            <div className="container">
                <Row xs={1} md={2} className="g-4">
                    {
                        cource.map((service) => (
                            <Col key={service.key}>
                                <Card>
                                    <Card.Img variant="top" src={service.img} />
                                    <Card.Body>
                                        <Card.Title> <strong>Cource Name </strong>: {service.name}</Card.Title>
                                        <h4>Price : {service.price}</h4>
                                        <Card.Text>
                                            {service.desc}
                                        </Card.Text>
                                        <Button className='btn btn-success'>Contact Us</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </div>
    );
};

export default Servicess2;