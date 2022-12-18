import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'
import Project from '../components/ProjectCard'
import Loader from '../components/Loader'

const Projects = () => {
  const [projects, setprojects] = useState({ loader: true, projectList: [] })
  const baseURL = "http://127.0.0.1:8000/projects/";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setprojects({ loader: false, projectList: response.data })
    });
  }, [])
  console.log(projects)
  return (
    <section className='bg1 p-4'>
      <Container>
        <h2 className='header2 text-center pb-3'>All Projects</h2>
        <Row>
          {projects.loader && <Loader />}
          {projects.projectList.map((project) => (
            <Col md={4} key={project.id}>
              <Project project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Projects