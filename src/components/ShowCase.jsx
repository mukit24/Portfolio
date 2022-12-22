import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Banner from '../images/banner.png'

const ShowCase = () => {
    return (
        <div className='bg-light'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} className='p-4 p-sm-3'>
                        <div className='header2'>
                            <h1>Hello, </h1>
                            <h1>I'm <span className='text-primary'>MUKIT</span></h1>
                            <h1 className='dev'>I'm a <span className='text-success'>FULL STACK DEVELOPER</span></h1>
                            <p className='lead text-muted'>Major Proficiency in <span className='color1'>ReactJS</span> and <span className='color1'>Django</span></p>
                        </div>
                        <div className="d-flex header2">
                            <Link to={'/projects'}>
                                <Button variant='outline-success me-2'><i className='fas fa-file-code me-1'></i> Projects</Button>
                            </Link>
                            <a href="https://github.com/mukit24" target="_blank" rel="noreferrer"><Button variant='dark'><i className='fab fa-github me-1'></i> Github</Button></a>
                        </div>
                    </Col>
                    <Col md={6}>
                        <Image src={Banner} fluid></Image>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default ShowCase