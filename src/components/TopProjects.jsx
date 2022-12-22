import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Button, Alert } from 'react-bootstrap'
import Project from './ProjectCard'
import Loader from './Loader'
import { Link } from 'react-router-dom'
import AlertBox from './AlertBox'

const TopProjects = () => {

    const [projects, setprojects] = useState({ loader: true, projectList: [], error: false })
    const baseURL = "https://mukitsportfolio.pythonanywhere.com/projects/top/";

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setprojects({ loader: false, projectList: response.data, error: false })
        }).catch((error)=>{
            setprojects({ loader: false, projectList : [], error: true})
        });
    }, [baseURL])

    return (
        <section className='bg1 p-4'>
            <Container>
                <h2 className='header2 text-center pb-3'>Top Projects</h2>
                <AlertBox />
                <Row className='g-3'>
                    {projects.loader && <Loader />}
                    {projects.error && (
                        <Alert variant='danger text-center fw-bold'>Sorry! Unable To Fetch Projects From API! </Alert>
                    )}
                    {projects.projectList.map((project) => (
                        <Col md={4} key={project.id}>
                            <Project project={project} />
                        </Col>
                    ))}
                </Row>
                <div className="text-center my-3">
                    <Link to={'/projects'}><Button variant='dark'> More Projects</Button></Link>
                </div>
            </Container>
        </section>
    )
}

export default TopProjects