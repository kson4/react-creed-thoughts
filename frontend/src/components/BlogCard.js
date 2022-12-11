import React from 'react'
import pose from '../img/creed-action.jpg'
import './BlogCard.css'

export default function BlogCard ({ title, img, date }) {
  return (
    <div className='card grid'>
      <h2 className='blog-title'>Looking For a Software Engineer?</h2>
      <div className='blog-img'>
        <img src={pose} alt='creed action' />
      </div>
      <p className='blog-date'>12/11/2021</p>
    </div>
  )
}
