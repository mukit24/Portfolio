import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Project from './ProjectCard'
import Loader from './Loader'
import { Link } from 'react-router-dom'

const TopProjects = () => {

    const [projects, setprojects] = useState({ loader: true, projectList: [] })
    const baseURL = "http://127.0.0.1:8000/projects/top/";

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setprojects({ loader: false, projectList: response.data })
        });
    }, [])

    return (
        <section className='bg1 p-4'>
            <Container>
                <h2 className='header2 text-center pb-3'>Top Projects</h2>
                <Row>
                    {projects.loader && <Loader />}
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