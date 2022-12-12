const mongoose = require('mongoose')

const BlogModelSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    category: {
      type: Array,
      required: true
    },
    content: {
      type: Array,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Blog', BlogModelSchema)
