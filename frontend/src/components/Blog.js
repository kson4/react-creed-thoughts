import React from 'react'
import { useLocation } from 'react-router-dom'
import './Blog.css'

export default function Blog () {
  const location = useLocation()
  const { title, img, date, content } = location.state

  return (
    <div className='blog'>
      <h2 className='blog-title'>{title}</h2>

      <div className='blog-img'>
        <img src={img} alt='main section' />
      </div>
      <div className='blog-info'>
        <p className='blog-date'>{date}</p>
        <p>AUTHOR: CREED BRATTON</p>
      </div>
      <div className='blog-content'>
        {content.map(item => (
          <p key={item}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item}</p>
        ))}
      </div>
      <div className='blog-comments'>
        <div className='info'>
          <div className='comment'>
            <i class='fa-regular fa-comment'></i>
            <p>10 Comments</p>
          </div>
          <div className='thumbs'>
            <i class='fa-regular fa-thumbs-up'></i>
            <i class='fa-regular fa-thumbs-down'></i>
            {/* <i class='fa-solid fa-thumbs-down'></i> */}
          </div>
        </div>
        <form className='textarea'>
          <textarea
            name=''
            id=''
            cols='30'
            rows='10'
            placeholder='What are your thoughts?'
          ></textarea>
          <button className='btn'>Comment</button>
        </form>
        <div className='comments'>
          <div className='comments-author'>NAME: DATE</div>
          <div className='comments-content'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
            ducimus.
          </div>
        </div>
      </div>
    </div>
  )
}
