import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Header from '../styled/components/navStyle';

function Navigation() {
    return(
        <Header>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="/"><img src="" alt="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav defaultActiveKey="/">
                        <Nav.Item>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about">About Me</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/blog">Blogs</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/contact">Contact Me</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Header>
    );
}

export default Navigation;