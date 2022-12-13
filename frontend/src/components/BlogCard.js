import React from 'react'
import { Link } from 'react-router-dom'
import './BlogCard.css'

export default function BlogCard ({ title, img, date, category, id, content }) {
  // const handleClick
  return (
    <div className='card grid'>
      <h2 className='blog-title'>{title}</h2>

      <div className='blog-img'>
        <Link
          to={{
            pathname: `/blog/${id}`,
            state: {
              title: title,
              img: img,
              date: date,
              category: category,
              content: content
              // name: 'check'
            }
          }}
        >
          {/* <Link to={`/blog/${id}`} state={{ title }}> */}
          <img src={img} alt='creed action' />
        </Link>
      </div>
      {content && <p className='content'>{content[0].substring(0, 200)}...</p>}

      {/* <p className='blog-date'>Posted on: {date}</p> */}
      {/* <div className='categories'>
        {category.map(item => (
          <p>{item}</p>
        ))}
      </div> */}
    </div>
  )
}
