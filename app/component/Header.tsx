"use client";
import Link from 'next/link'
import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import Search from './Search';
const Header = () => {   
  return (
    <>
            {['md'].map((expand,i) => (
                <Navbar key={i}   expand={expand} className="mb-3 pt-3 ">
                <Container className='CNAV' >
                <Navbar.Brand  className='fw-bold'style={{cursor:'pointer'}} > <Link href={'/'} className='NB' >Game World</Link></Navbar.Brand>
                <Navbar.Toggle  aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas 
                    style={{backgroundColor:'rgba(0,0,0,.3)',color:'#ffffff'}}
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                <Offcanvas.Header closeButton style={{}}>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end nv-link flex-grow-1 pe-3">
                        <Link href={'/'} className='nav-link'>Home</Link>
                        <Link href={'/games'} className='nav-link'>Games</Link>
                        <Link href={'/games/platforms'} className='nav-link'>Platforms</Link>
                    </Nav>
                    
                    <Search/>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                </Container>
            </Navbar>
        ))}
        </>
    );
  
}

export default Header