const express = require('express')
const router = express.Router()

const {
  getBlogs,
  getBlog,
  getBlogsByCategory,
  createBlog,
  deleteBlog,
  updateBlog
} = require('../controllers/HomeController')

router.get('/', getBlogs)
router.get('/:id', getBlog)
router.get('/:category', getBlogsByCategory)
router.post('/', createBlog)
router.delete('/:id', deleteBlog)
router.patch('/:id', updateBlog)

module.exports = router
