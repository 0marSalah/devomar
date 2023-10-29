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
          I&apos;m a <span className='underline'>Software Engineer</span>
        </h1>
        <p>{home.home}</p>
        <div
          style={{
            display: 'flex',
            gap: '1rem'
          }}
        >
          <div className='primary-btn'>
            <Link spy={true} smooth={true} duration={500} to={'contact'}>
              Get In Touch
            </Link>
          </div>
          <div className='primary-btn'>
            <a
              href={'https://drive.google.com/file/d/12ggp8bzf7pziQ30Po2k1nPVf55OIaw0t/view?usp=drive_link'}
              target='_blank'
              rel='noreferrer'
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
