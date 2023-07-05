const asyncHandler = require('express-async-handler')

const Trick = require('../models/trickModel')

// @desc Get tricks
// @route GET /api/tricks
// @access Private

const getTricks = asyncHandler(async (req, res) => {
  const tricks = await Trick.find()

  res.status(200).json(tricks)
})

// @desc Get tricks
// @route POST /api/tricks
// @access Private

const setTrick = asyncHandler(async (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new  Error('Please add a text field')
  }

  const trick = await Trick.create({
    text: req.body.text
  })

  res.status(200).json(trick)
})

// @desc Get tricks
// @route PUT /api/tricks
// @access Private

const updateTrick = asyncHandler(async (req, res) => {
  const trick = await Trick.findById(req.params.id)

  if(!trick) {
    res.status(400)
    throw new Error('Trick not found')
  }

  const updatedTrick = await Trick.findByIdAndUpdate(req.params.id, req.body, {new: true})

  res.status(200).json(updatedTrick)
})

// @desc Get tricks
// @route DELETE /api/tricks
// @access Private

const deleteTrick = asyncHandler(async (req, res) => {
  const trick = await Trick.findByIdAndDelete(req.params.id)

  if(!trick) {
    res.status(400)
    throw new Error('Trick not found')
  }

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getTricks,
  setTrick,
  updateTrick,
  deleteTrick
}