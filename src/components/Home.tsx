import '../styles/home.scss'
import '../styles/home-responsive.scss'

import React from 'react'
import home from '../db/me.json'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div className='home-container wrapper' id='home'>
      <div className='avatar'>
        <img src='/home-avatar.png' width={500} height={500} alt='avatar' />
      </div>
      <div className='content'>
        <h1>
          Hello I Am <span className='primary-span'>Omar Salah</span>
        </h1>
        <img className='arrow' src='/arrow.svg' width={100} height={100} alt='left' />
        <h1>
          <span className='underline'>Software Engineer</span>
        </h1>
        <p>{home.home}</p>
        <div className='home-btns'>
          <div className='primary-btn'>
            <Link spy={true} smooth={true} duration={500} to={'contact'}>
              Get In Touch
            </Link>
          </div>
          <div className='primary-btn'>
            <a
              href={'https://drive.google.com/file/d/1S7OuNOnPprDDaOafLEt5vfsxRbc-f-a4/view?usp=sharing'}
              target='_blank'
              rel='noreferrer'
            >
              View My CV
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
