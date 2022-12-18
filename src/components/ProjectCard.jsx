import React from 'react'
import { Badge, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Project = ({ project }) => {
    return (
        <Card className="h-100 p-2 rounded">
            <Link to={`/projects/${project.id}`} className='text-decoration-none'>
                <Card.Img variant="top" src={project.cover} alt='project' />
            </Link>
            <Card.Body>
                <Card.Title as="h5" className='header2'>
                    <strong>{project.title}</strong>
                </Card.Title>
                <div className="d-flex flex-wrap">
                    {project.tags.map((tag) => (
                        <Badge variant='danger' key={tag.id} className='m-1'>{tag.name}</Badge>
                    ))}
                </div>
                <div className="d-flex flex-wrap my-2">
                    <Link to={`/projects/${project.id}`} className='text-decoration-none'>
                        <Button type='button' variant='success btn-sm m-1'>Details</Button>
                    </Link>
                    <a href={project.github} target="_blank" rel="noreferrer">
                        <Button type='button' variant='secondary btn-sm m-1'><i className='fab fa-github me-1'></i>Code</Button>
                    </a>
                    {project.live_demo && (
                        <a href={project.live_demo} target="_blank" rel="noreferrer"><Button type='button' variant='dark btn-sm m-1'>Live Demo</Button></a>
                    )}
                </div>
            </Card.Body>
        </Card>

    )
}

export default Project