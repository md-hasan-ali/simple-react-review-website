import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Menubar.css'
import logo from '../../images/logo-img.jpg'


const MenuBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className='logo-img'>
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Nav className="ms-auto menubar">
                        <Nav.Link className='text-white' href="#home">Home</Nav.Link>
                        <Nav.Link className='text-white' href="#features">About Us</Nav.Link>
                        <Nav.Link className='text-white' href="#pricing">Services</Nav.Link>
                        <Nav.Link className='text-white' href="#pricing">Contact Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default MenuBar;