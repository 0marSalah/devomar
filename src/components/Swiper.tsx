// Swiper.js
import React from 'react'
import '../styles/swiper.scss'
import { useState, useRef } from 'react'

const Swiper = ({ children }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [startX, setStartX] = useState(0)
  const [isSwiping, setIsSwiping] = useState(false)
  const swiperRef = useRef(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX)
    setIsSwiping(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping) return

    const currentX = e.touches[0].clientX
    const deltaX = currentX - startX

    if (deltaX > 50) {
      goToPrevious()
      setIsSwiping(false)
    } else if (deltaX < -50) {
      goToNext()
      setIsSwiping(false)
    }
  }

  const handleTouchEnd = () => {
    setIsSwiping(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isSwiping) return

    const currentX = e.clientX
    const deltaX = currentX - startX

    if (deltaX > 50) {
      goToPrevious()
      setIsSwiping(false)
    } else if (deltaX < -50) {
      goToNext()
      setIsSwiping(false)
    }
  }

  const handleMouseUp = () => {
    setIsSwiping(false)
  }
  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX)
    setIsSwiping(true)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? children.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const newIndex = currentIndex === children.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  const translateXValue = -currentIndex * 100

  return (
    <div
      className='swiper'
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      ref={swiperRef}
    >
      <div onClick={goToPrevious} className='leftArrowStyles'>
        <img src='/back.png' width={20} height={20} alt='left' />
      </div>
      <div onClick={goToNext} className='rightArrowStyles'>
        <img src='/forward.png' width={20} height={20} alt='right' />
      </div>
      <div className='slidesContainer' style={{ transform: `translateX(${translateXValue}%)` }}>
        {children}
      </div>
      <div className='dotsContainerStyles'>
        {children.map((_: any, slideIndex: number) => (
          <div
            className={`dotStyle ${currentIndex === slideIndex ? 'activeDot' : ''}`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>
    </div>
  )
}

export const Slide = ({ children }: any) => {
  return <div className='slide'>{children}</div>
}

export default Swiper
