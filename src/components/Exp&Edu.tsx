import '../styles/experience.scss'

import React from 'react'
import Swiper, { Slide } from './Swiper'
import experience from '../db/experience.json'
import education from '../db/education.json'

const ExpEdu = () => {
  const [tab, setTab] = React.useState('experience')

  const handleTab = (tab: string) => {
    setTab(tab)
  }

  const slides = tab === 'experience' ? experience : education
  return (
    <div className='exp-edu-wrapper' id='experiance'>
      <div className='exp-edu-container'>
        <ul className='tabs'>
          <li onClick={() => handleTab('experience')} style={{ opacity: tab === 'experience' ? '1' : '0.4' }}>
            My <span className='underline'>Experience</span>
          </li>
          <li onClick={() => handleTab('education')} style={{ opacity: tab === 'experience' ? '0.4' : '1' }}>
            <span className={`underline ${tab === 'experience' ? '.underline-x' : ''}`}>Education</span>
          </li>
        </ul>

        <div className='swiper-wrapper'>
          <Swiper>
            {slides.map((slide: any, index: number) => (
              <Slide key={index}>
                <section>
                  <h2
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      gap: '10px'
                    }}
                  >
                    {slide.title} at{' '}
                    <a className='primary-span' href={slide.url} target='_blank' rel='noreferrer'>
                      {slide.subtitle}
                    </a>
                    {slide.projects_url && (
                      <>
                        -{' '}
                        <a className='primary-span' href={slide.projects_url} target='_blank' rel='noreferrer'>
                          Projects
                        </a>
                      </>
                    )}
                  </h2>
                  <p className='duration'>
                    {slide.start_date} - {slide.end_date}
                  </p>
                  <ul className='job-description'>
                    {slide.description.map((desc: string, index: number) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                </section>
              </Slide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default ExpEdu
