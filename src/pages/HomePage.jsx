import React from 'react'
import About from '../components/About'
import ShowCase from '../components/ShowCase'
import TopProjects from '../components/TopProjects'

const HomePage = () => {
  return (
    <div>
        <ShowCase />
        <About />
        <TopProjects />
    </div>
  )
}

export default HomePage