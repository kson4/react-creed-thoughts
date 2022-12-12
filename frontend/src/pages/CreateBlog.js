import React, { useState } from 'react'
import './CreateBlog.css'

export default function CreateBlog () {
  const [title, setTitle] = useState('')
  const [newCategory, setNewCategory] = useState('')
  const [category, setCategory] = useState([])
  const [newContent, setNewContent] = useState('')
  const [content, setContent] = useState([])
  const [img, setImg] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()
    const blog = { title, category, content, img }
    const res = await fetch('/apiv1/home', {
      method: 'POST',
      body: JSON.stringify(blog),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await res.json()
    if (!res.ok) {
      setError(json.error)
    } else {
      setTitle('')
      setNewCategory('')
      setCategory([])
      setNewContent('')
      setContent([])
      setImg('')
      setError(null)
      console.log('new blog added: ', blog)
    }
  }
  const handleCategory = e => {
    e.preventDefault()
    setCategory(prev => [...prev, newCategory])
    setNewCategory('')
  }
  const handleContent = e => {
    e.preventDefault()
    setContent(prev => [...prev, newContent])
    setNewContent('')
  }

  return (
    <div className='create-blog'>
      <form className='create-blog-form' onSubmit={handleSubmit}>
        <label>
          <h3>Title:</h3>
          <input
            type='text'
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <h3>Image URL:</h3>
          <input
            type='text'
            onChange={e => setImg(e.target.value)}
            value={img}
          />
        </label>
        <label>
          <h3>Category:</h3>
          <input
            type='text'
            onChange={e => setNewCategory(e.target.value)}
            value={newCategory}
          />
        </label>
        <button className='btn' onClick={handleCategory}>
          Add
        </button>
        <div>
          {category.map(each => (
            <p key={each}>{each}</p>
          ))}
        </div>
        <label>
          <h3>Content:</h3>
          <textarea
            type='text'
            rows='30'
            cols='50'
            onChange={e => setNewContent(e.target.value)}
            value={newContent}
          />
        </label>
        <button className='btn' onClick={handleContent}>
          Add
        </button>
        <div>
          {content.map(each => (
            <p key={each}>{each}</p>
          ))}
        </div>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}
