// Adding necessary file
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css'

// Service Component Start 
const Service = (props) => {
    const { name, price, img, desc } = props.service;
    const histriy = useHistory();
    const buttonClick = () => {
        histriy.push('/contact')
    }
    return (
        <Col>
            <Card className='single-card-item'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h4>Price : {price}</h4>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <button onClick={buttonClick} className='btn btn-success'>Contact Us</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;

// Service Component End