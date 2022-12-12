import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import './Home.css'

export default function Home () {
  const [blogs, setBlogs] = useState(null)
  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch('/apiv1/home')
      const json = await res.json()
      if (res.ok) {
        setBlogs(json)
      }
    }
    fetchBlogs()
  }, [])

  const date = new Date().toLocaleDateString()
  return (
    <div className='hero grid'>
      <p className='date'>{date}</p>
      <div className='empty'></div>
      <div className='section grid'>
        <h3 className='category'>RECOMMENDED ARTICLES.</h3>
        <div className='blog-card-container'>
          {blogs &&
            blogs.map(blog => (
              <div key={blog._id}>
                <BlogCard
                  title={blog.title}
                  img={blog.img}
                  date={blog.createdAt}
                  category={blog.category}
                  id={blog._id}
                  content={blog.content}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
