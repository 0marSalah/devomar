import '../styles/home.scss'
import '../styles/home-responsive.scss'

import React from 'react'

import home from '../db/me.json'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <div className='home-container about-container wrapper' id='about'>
      <div className='content'>
        <h1>
          Let&apos;s get know <span className='underline'>about me</span> closer
        </h1>
        <p>{home.about}</p>
        <div className='primary-btn'>
          <Link spy={true} smooth={true} duration={500} to={'contact'}>
            Work With Me
          </Link>
        </div>
      </div>
      <div className='avatar'>
        <img src='/about.png' width={500} height={500} alt='avatar' />
      </div>
    </div>
  )
}

export default About
