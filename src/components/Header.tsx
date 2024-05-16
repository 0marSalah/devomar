'use client'
import React from 'react'
import links from '../db/header.json'
import { Link } from 'react-scroll'

/* Style imports */
import '../styles/header.scss'
import '../styles/hamburger.scss'

const Header = () => {
  const [isActive, setActive] = React.useState(false)
  const [msg, setMsg] = React.useState('Click to copy!')

  const email = 'omar.salah1597@gmail.com'

  const handleIconClick = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setMsg('copied!')
      })
      .then(() => {
        setTimeout(() => {
          setMsg('Click to copy!')
        }, 2000)
      })
      .catch(() => {})
  }

  return (
    <div className='header-wrapper wrapper'>
      <div className='header'>
        <div className='logo'>
          <Link to='home' spy={true} smooth={true} duration={500}>
            <img src='/pal-logo1.svg' alt='omar' />
          </Link>
        </div>
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
          <li className='gmail-icon' data-msg={msg} onClick={handleIconClick}>
            <img src='/social-icons/gmail.png' alt='' />
          </li>
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
            <li className='gmail-icon' data-msg={msg} onClick={handleIconClick}>
              <img src='/social-icons/gmail.png' alt='' />
            </li>
            {links.sociallinks.map(link => (
              <li className='icon' key={link.title}>
                <a href={link.url} target='_blank' rel='noreferrer'>
                  <img src={link.logo} alt={link.title} width={25} height={25} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
