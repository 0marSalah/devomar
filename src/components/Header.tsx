'use client'
import React from 'react'
import links from '../db/header.json'
import { Link } from 'react-scroll'

/* Style imports */
import '../styles/header.scss'
import '../styles/hamburger.scss'

const Header = () => {
  const [isActive, setActive] = React.useState(false)

  return (
    <div className='header-wrapper wrapper'>
      <div className='header'>
        <div className='logo'>OMAR</div>
        <ul className='links'>
          {links.sectionlinks.map(link => (
            <li key={link.title}>
              <Link to={link.url} spy={true} smooth={true} duration={500} activeClass='active'>
                {link.title.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
        <ul className='icons'>
          {links.sociallinks.map(link => (
            <li className='icon' key={link.title}>
              <a href={link.url} target='_blank' rel='noreferrer'>
                <img src={link.logo} alt={link.title} width={25} height={25} />
              </a>
            </li>
          ))}
        </ul>
        <div className={`hamburger ${isActive ? 'active' : ''}`} id='hamburger' onClick={() => setActive(!isActive)}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
        <div
          className='mob-links'
          style={{
            bottom: isActive ? '-350%' : '100%'
          }}
        >
          <ul className=''>
            {links.sectionlinks.map(link => (
              <li key={link.title}>
                <Link to={link.url} spy={true} smooth={true} duration={500}>
                  {link.title.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
          <ul className='mob-icons'>
            {links.sociallinks.map(link => (
              <li className='icon' key={link.title}>
                <Link spy={true} smooth={true} duration={500} to={link.url}>
                  <img src={link.logo} alt={link.title} width={25} height={25} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
