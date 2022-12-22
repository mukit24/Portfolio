import React from 'react'
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap'
import Skills from './Skills'
const About = () => {
    const skills = ['Django', 'Django-Rest-Framework', 'Python', 'React', 'Redux', 'Redux-Toolkit', 'Javascript', 'Rest API', 'JSON', 'JWT', 'Bootstrap 5', 'React-Bootstrap', 'Ajax', 'Jquery', 'HTML 5', 'CSS 3', 'Sass','Git', 'Blockchain', 'Hyperledger Fabric', 'Web Scraping', 'Machine Learning', 'DBMS', 'SQL','Data Structure', 'C', 'C++']

    return (
        <section className='bg1 p-4'>
            <Container>
                <h2 className='header2 text-center'>About Me</h2>
                <div className="text-center mb-3">
                    <a href="/"><Button variant='dark btn-sm'><i className='fas fa-file-download me-1'></i> Download CV</Button></a>
                </div>
                <Row className='g-4'>
                    <Col md={6}>
                        <h3 className='header2 color1 text-center'>Personal Info <i className='fas fa-user-alt ms-1'></i></h3>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h5><strong>Name:</strong> Mukit Hasan Pranto</h5>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5><strong>Date of Birth:</strong> 18 Oct, 1998</h5>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5><strong>University:</strong> Khulna University(CSE)</h5>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5><strong>Mobile:</strong> 01980492420</h5>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5><strong>Email:</strong> pranto1824@cseku.ac.bd</h5>
                            </ListGroup.Item>
                            {/* <ListGroup.Item>
                                <h5><strong>Github:</strong> <a href="https://github.com/mukit24" className='text-decoration-none' target="_blank" rel="noreferrer">Click Here</a></h5>
                            </ListGroup.Item> */}
                        </ListGroup>

                    </Col>
                    <Col md={6}>
                        <h3 className='header2 color1 text-center'>Technical Skills <i className='fas fa-code ms-1'></i></h3>
                        <div className="skills-flex d-flex flex-wrap justify-content-center py-2 py-sm-4">
                            {skills.map((skill, index) => (
                                <Skills name={skill} />
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About