import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Menubar.css'
import logo from '../../images/logo-img.jpg'
import { Link } from 'react-router-dom';


const MenuBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className='logo-img'>
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Nav className="ms-auto menubar">
                        <Link className='text-white' to="/home">Home</Link>
                        <Link className='text-white' to="/about">About Us</Link>
                        <Link className='text-white' to="/services">Services</Link>
                        <Link className='text-white' to="/contact">Contact Us</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default MenuBar;