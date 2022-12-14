import React from 'react'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer () {
  return (
    <div className='footer'>
      <div className='logo'>Creed Bratton - Creed Thoughts</div>
      <div className='socials'>
        <a href='https://github.com/kson4'>
          <AiIcons.AiFillGithub />
        </a>
        <a href='https://www.linkedin.com/in/david-kh-son/'>
          <AiIcons.AiFillLinkedin />
        </a>
      </div>
      <div className='links'>
        <Link to='/'>
          <p className='link'>HOME</p>
        </Link>
        <Link to='/about'>
          <p className='link'>ABOUT</p>
        </Link>
        <Link to='/contact'>
          <p className='link'>CONTACT</p>
        </Link>
      </div>
    </div>
  )
}
