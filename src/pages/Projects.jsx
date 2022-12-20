import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Form, FloatingLabel, Alert } from 'react-bootstrap'
import Project from '../components/ProjectCard'
import Loader from '../components/Loader'

const Projects = () => {
  const [projects, setprojects] = useState({ loader: true, projectList: [], error: false })

  const [tagSelect, setTagSelect] = useState('all')

  const baseURL = "http://127.0.0.1:8000/projects";

  useEffect(() => {
    axios.get(`${baseURL}/${tagSelect}/`).then((response) => {
      setprojects({ loader: false, projectList: response.data })
    }).catch((error)=>{
      setprojects({ loader: false, projectList : [], error: true})
  });

  }, [tagSelect])


  const tagSet = new Set()

  for (let i in projects.projectList) {
    const tagList = projects.projectList[i].tags;
    for (let j in tagList) {
      tagSet.add(tagList[j].name)
    }
  }

  const tags = [...tagSet]


  return (
    <section className='bg1 p-4'>
      <Container>
        <h2 className='header2 text-center pb-1'>All Projects</h2>
        {projects.error && (
          <Alert variant='danger text-center fw-bold'>Sorry! Unable To Fetch Projects From API! </Alert>
        )}
        <Row className='justify-content-center pb-4'>
          <Col md={4}>
            <FloatingLabel controlId="floatingSelect" label="Filter Projects With Tag">
              <Form.Select aria-label="Floating label select example" className='fw-bold text-primary' value={tagSelect} onChange={(e) => setTagSelect(e.target.value)}>
                <option value='all'>All Projects</option>
                {tags.map((tag) => (
                  <option value={tag}>{tag}</option>
                ))}
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
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