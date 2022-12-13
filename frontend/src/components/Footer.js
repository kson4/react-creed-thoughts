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
          <p className='link'>Home</p>
        </Link>
        <Link to='/'>
          <p className='link'>About</p>
        </Link>
        <Link to='/'>
          <p className='link'>Contact</p>
        </Link>
      </div>
    </div>
  )
}
