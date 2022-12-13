const mongoose = require('mongoose')
const Blog = require('../models/BlogModel')

const getBlogs = async (req, res) => {
  const blogs = await Blog.find({}).sort({ createdAt: -1 })
  // const blogs = await Blog.find({}).sort()

  res.status(200).json(blogs)
}
const getBlog = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid blog id' })
  }
  const blog = await Blog.findById(id)
  if (!blog) {
    return res.status(400).json({ error: 'Blog does not exist...' })
  }
  res.status(200).json(blog)
}
const getBlogsByCategory = async (req, res) => {
  const { category } = req.params
  const blogs = await Blog.find({ category: category }).sort({ createdAt: -1 })
  res.status(200).json(blogs)
}

const createBlog = async (req, res) => {
  const { title, category, content, img } = req.body

  // catch errors
  let emptyFields = []
  if (!title) {
    emptyFields.push('title')
  }
  if (!category) {
    emptyFields.push('category')
  }
  if (!content) {
    emptyFields.push('content')
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: 'Please fill in all the fields', emptyFields })
  }

  try {
    const blog = await Blog.create({ title, category, content, img })
    res.status(200).json(blog)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
const deleteBlog = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid blog id' })
  }
  const blog = await Blog.findOneAndDelete({ _id: id })
  if (!blog) {
    return res.status(400).json({ error: 'Blog does not exist...' })
  }
  res.status(200).json(blog)
}
const updateBlog = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid blog id' })
  }
  const blog = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body
    }
  )
  if (!blog) {
    return res.status(400).json({ error: 'Blog does not exist...' })
  }
  res.status(200).json(blog)
}

module.exports = {
  getBlogs,
  getBlog,
  getBlogsByCategory,
  createBlog,
  deleteBlog,
  updateBlog
}
