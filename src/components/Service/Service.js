import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css'

const Service = (props) => {
    const { name, price, img, desc } = props.service;
    const histriy = useHistory();
    const buttonClick = () => {
        histriy.push('/contact')
    }
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h4>Price : {price}</h4>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Button onClick={buttonClick} className='btn btn-success'>Contact Us</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;