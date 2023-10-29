import React from 'react'
import projects from '../db/projects.json'
import Swiper, { Slide } from './Swiper'
import '../styles/projects.scss'

const Projects = () => {
  return (
    <div className='projects'>
      <div className='container'>
        <h1 className='head-projects'>
          <span className='underline'>My Projects</span> Highlight
        </h1>
        <Swiper>
          {projects.map((project: any) => (
            <Slide key={project.id} className='project-slide'>
              <img src={project.photo} alt={project.title} className='project-img' />
              <div className='project-details'>
                <h1>
                  {project.title} <span className='line'></span>
                </h1>
                <p className='project-subtitle'>{project.subtitle}</p>
                <p className='project-description'>{project.description}</p>
                <ul className='ship-container'>
                  {project.skills.map((skill: string, index: number) => (
                    <li className='ship' key={index}>
                      {skill}
                    </li>
                  ))}
                </ul>
                <ul className='project-icons links'>
                  {project.code_url !== '' && (
                    <li className='icon' key={project.title}>
                      <a href={project.code_url} target='_blank' rel='noreferrer'>
                        <img src={'/social-icons/github.png'} alt={project.title} width={25} height={25} />
                      </a>
                    </li>
                  )}
                  <li className='icon' key={project.title}>
                    <a href={project.url} target='_blank' rel='noreferrer'>
                      <img src={'/external.png'} alt={project.title} width={25} height={25} />
                    </a>
                  </li>
                </ul>
              </div>
            </Slide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Projects
