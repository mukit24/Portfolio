import React from 'react'
import { Navbar, Container, Offcanvas, Nav, Button } from 'react-bootstrap'
import Icon from '../images/portfolio_icon.png'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    const expand = false
    return (
        <Navbar bg="light" expand={expand} sticky="top">
            <Container fluid>
                <LinkContainer to={'/'}>
                    <Navbar.Brand href="#" className='mx-auto header1'>
                        <img
                            src={Icon}
                            width="35"
                            height="35"
                            className="d-inline-block align-top me-2"
                            alt="portfolio logo"
                        />
                        Mukit's Portfolio
                    </Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="start"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <LinkContainer to={'/'}>
                                <Nav.Link>Home Page</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/projects'}>
                                <Nav.Link>Projects</Nav.Link>
                            </LinkContainer>
                            <a href="https://github.com/mukit24" className='py-2' target="_blank" rel="noreferrer">
                                <Button variant='success btn-sm'><i className='fab fa-github me-1'></i> Github Profile</Button>
                            </a>

                            <a href="/"><Button variant='primary btn-sm'><i className='fas fa-file-download me-1'></i> Download CV</Button></a>



                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default Header