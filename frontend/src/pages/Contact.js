import React from 'react'
import './Contact.css'

export default function Contact () {
  return (
    <div className='contact'>
      <h3>Contact Me</h3>
      <form className='contact-form'>
        <label>
          <p>FIRST NAME</p>
          <input type='text' />
        </label>
        <label>
          <p>LAST NAME</p>
          <input type='text' />
        </label>
        <label>
          <p>PHONE NUMBER</p>
          <input type='text' />
        </label>
        <label>
          <p>EMAIL ADDRESS</p>
          <input type='email' />
        </label>
        <label>
          <p>MESSAGE</p>
          <textarea name='' id='' cols='30' rows='10'></textarea>
        </label>
        <div>
          <button className='btn'>SUBMIT</button>
        </div>
      </form>
    </div>
  )
}
