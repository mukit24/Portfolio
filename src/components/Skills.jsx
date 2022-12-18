import React from 'react'
import { Badge } from 'react-bootstrap'
const Skills = ({name}) => {
  return (
    <h5 className='mx-1'><Badge pill bg="primary">{name}</Badge></h5>
  )
}

export default Skills