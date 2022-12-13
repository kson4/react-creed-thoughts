import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import './Home.css'

export default function Home () {
  const [blogs, setBlogs] = useState(null)
  // const [featured, setFeatured] = useState([])
  // const [finance, setFinance] = useState([])
  // const [thoughts, setThoughts] = useState([])

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
  // useEffect(() => {
  //   blogs.map(blog => {
  //     let found = false
  //     for (let i = 0; i < blog.category.length; i++) {
  //       if (blog.category === 'Finance') {
  //         setFinance(prev => [...prev, blog])
  //         found = true
  //       }
  //       if (blog.category === 'Featured') {
  //         setFeatured(prev => [...prev, blog])
  //         found = true
  //       }
  //     }
  //     if (!found) {
  //       setThoughts(prev => [...prev, blog])
  //     }
  //   })
  // }, [blogs])

  const date = new Date().toLocaleDateString()
  return (
    <div className='hero grid'>
      <p className='date'>{date}</p>
      <div className='empty'></div>
      <div className='section grid'>
        <h3 className='category'>RECOMMENDED ARTICLES.</h3>
        {/* <div className='blog-card-container featured'>
          {blogs && (
            <div key={blogs[blogs.length - 1]._id}>
              <BlogCard
                title={blogs[blogs.length - 1].title}
                img={blogs[blogs.length - 1].img}
                date={blogs[blogs.length - 1].createdAt}
                category={blogs[blogs.length - 1].category}
                id={blogs[blogs.length - 1]._id}
                content={blogs[blogs.length - 1].content}
              />
            </div>
          )}
        </div> */}
        <div className='blog-card-container'>
          {blogs &&
            blogs
              .slice(0)
              .reverse()
              .map((blog, idx) => {
                if (idx === 1) {
                  return (
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
                  )
                }
                return (
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
                )
              })}
        </div>
      </div>
    </div>
  )
}
