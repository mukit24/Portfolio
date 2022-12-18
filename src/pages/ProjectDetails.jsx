import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Image, Badge, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Loader from '../components/Loader'


const ProjectDetails = () => {
    const [project, setproject] = useState({ loader: true, details: [] })
    const params = useParams()

    const baseURL = `http://127.0.0.1:8000/projects/${params.id}`;

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setproject({ loader: false, details: response.data })
        });
    }, [])

    const { loader, details } = project
    return (
        <div className='bg1'>
            <Container>
                <Link to='/projects' className='btn btn-success btn-sm my-3'><i className='fas fa-arrow-left'></i> Projects</Link>
                {loader ? (
                    <Loader />
                ) : (<div>
                    <Row>
                        <Col md={5} className='py-2 py-sm-4'>
                            <h4 className='header2'>{details.title}</h4>
                            <h5 className="d-flex flex-wrap">
                                {details.tags.map((tag, index) => (
                                    <Badge variant='danger' key={index} className='m-1'>{tag.name}</Badge>
                                ))}
                            </h5>
                            <div className="d-flex flex-wrap my-2">
                                <a href={details.github} target="_blank" rel="noreferrer">
                                    <Button type='button' variant='secondary m-1'><i className='fab fa-github me-1'></i>Code</Button>
                                </a>
                                {details.live_demo && (
                                    <a href={details.live_demo} target="_blank" rel="noreferrer"><Button type='button' variant='dark m-1'>Live Demo</Button></a>
                                )}
                            </div>
                        </Col>
                        <Col md={7}>
                            <Image src={details.cover} alt={details.title} fluid />
                        </Col>
                    </Row>
                    <h3 className='header2 text-center py-4'>Description</h3>
                    <Row className='justify-content-center'>
                        <Col md={8}>
                            <div dangerouslySetInnerHTML={{ __html: details.description }} />
                        </Col>
                    </Row>
                </div>

                )}

            </Container>
        </div>
    )
}

export default ProjectDetails