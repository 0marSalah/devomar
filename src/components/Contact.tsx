import React from 'react'
import emailjs from '@emailjs/browser'

import '../styles/contact.scss'

const Contact = () => {
  const [formData, setFormData] = React.useState({
    user_name: '',
    user_email: '',
    user_message: ''
  })
  const form = React.useRef(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')

  const { user_name, user_email, user_message } = formData

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    try {
      if (!user_name || !user_email || !user_message) {
        setError('Please complete all inputs.')
        setTimeout(() => {
          setError('')
        }, 2000)
        return
      }
      setLoading(true)
      if (form.current && user_name && user_email && user_message) {
        const result = await emailjs.sendForm('service_k0qceod', 'template_v1mp80i', form.current, 't4BLU1roR0jC51ah_')
        console.log(result)
        // Check if the email was sent successfully
        if (result.text === 'OK') {
          setFormData({
            user_name: '',
            user_email: '',
            user_message: ''
          })
          console.log('Email sent successfully')
        } else {
          console.error('Error sending email:', result.text)
        }
      }
      setLoading(false)
    } catch (error) {
      console.error('Error sending email:', error)
    }
  }

  return (
    <div className='contact-container' id='contact'>
      <h1>
        Interested in <br /> <span className='underline'>working</span> with me?
      </h1>
      <h2>Let's get in touch! 🌟</h2>
      <form ref={form} onSubmit={handleSubmit}>
        <div className='input-container'>
          <label htmlFor='user_name'>Name</label>
          <input
            placeholder='Your Name'
            type='text'
            id='user_name'
            name='user_name'
            value={user_name}
            onChange={handleInputChange}
          />
        </div>
        <div className='input-container'>
          <label htmlFor='user_email'>Email</label>
          <input
            placeholder='example@example.com'
            type='email'
            id='user_email'
            name='user_email'
            value={user_email}
            onChange={handleInputChange}
          />
        </div>
        <div className='input-container'>
          <label htmlFor='user_message'>Message</label>
          <textarea
            placeholder='Your Message'
            id='user_message'
            name='user_message'
            value={user_message}
            onChange={handleInputChange}
          />
        </div>
        <div>
          {error && <p className='error-message'>{error}</p>}
          <button className='primary-btn' type='submit'>
            {loading ? <div className='loading-circle'></div> : 'Send'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
