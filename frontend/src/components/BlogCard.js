import React from 'react'
import './BlogCard.css'

export default function BlogCard ({ title, img, date }) {
  return (
    <div className='card grid'>
      <h2 className='blog-title'>{title}</h2>
      <div className='blog-img'>
        <img src={img} alt='creed action' />
      </div>
      <p className='blog-date'>Posted on: {date}</p>
    </div>
  )
}
