const blogsRouter = require('express').Router();
const Blog = require('../models/blog');

blogsRouter.get('/', async (request, response) => {
  const results = await Blog.find({})
  response.json(results)
})

blogsRouter.post('/', async (request, response) => {
  const blogData = request.body
  const blog = new Blog({
    title: blogData.title,
    author: blogData.author,
    url: blogData.url,
    likes: blogData.likes === undefined ? 0 : blogData.likes
  })
  const savedBlog = await blog.save()
  response.status(201).json(savedBlog.toJSON())
})

blogsRouter.get('/:id', async (request, response) => {
  const id = request.params.id
  const result = await Blog.findById(id)
  response.json(result.toJSON())
})

blogsRouter.delete('/:id', async (request, response) => {
  const id = request.params.id
  await Blog.findByIdAndRemove(id)
  response.status(204).end()
})

blogsRouter.put('/:id', async (request, response) => {
  const body = request.body
  const newData = {
    likes: body.likes
  }
  const updated = await Blog.findByIdAndUpdate(request.params.id, newData, { new: true })
  response.json(updated.toJSON())
})

module.exports = blogsRouter;