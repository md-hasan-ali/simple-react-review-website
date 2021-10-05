// Adding necessary file
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './servicess2.css'

// Servicess2 Component Start 
const Servicess2 = () => {
    const history = useHistory()
    const [cource, setCource] = useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setCource(data))
    }, [])
    const clickButton = () => {
        history.push('/contact')
    }
    return (
        <div className='all-services pb-5'>
            <h2 className='py-5 title text-dark'>Our All Services</h2>
            <div className="container">
                { // Add Spinner
                    cource.length === 0 ?
                        <Button variant="primary" disabled>
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Loading...
                        </Button> :
                        <Row xs={1} md={3} className="g-4">
                            {
                                cource.map((service) => (
                                    <Col key={service.key}>
                                        <Card className='single-card'>
                                            <Card.Img variant="top" src={service.img} />
                                            <Card.Body>
                                                <Card.Title> <strong>Cource Name </strong>: {service.name}</Card.Title>
                                                <h4>Price : {service.price}</h4>
                                                <Card.Text>
                                                    {service.desc}
                                                </Card.Text>
                                                <button onClick={clickButton} className='btn btn-success'>Contact Us</button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                }
            </div>
        </div>
    );
};

export default Servicess2;

// Servicess2 Component End 