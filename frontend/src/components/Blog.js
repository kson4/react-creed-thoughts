import React from 'react'
import { useLocation } from 'react-router-dom'
import './Blog.css'

export default function Blog () {
  const location = useLocation()
  console.log(location)
  const { title, img, date, content } = location.state
  // const { img } = location.state

  return (
    <div className='blog'>
      <h2 className='blog-title'>{title}</h2>

      <div className='blog-img'>
        <img src={img} alt='blog image' />
      </div>
      <div className='blog-info'>
        <p className='blog-date'>{date}</p>
        <p>AUTHOR: CREED BRATTON</p>
      </div>
      <div className='blog-content'>
        {content.map(item => (
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item}</p>
        ))}
      </div>
    </div>
  )
}
