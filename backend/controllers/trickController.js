const asyncHandler = require('express-async-handler')

const Trick = require('../models/trickModel')

// @desc Get tricks
// @route GET /api/tricks
// @access Private

const getTricks = asyncHandler(async (req, res) => {
  const tricks = await Trick.find()

  res.status(200).json(tricks)
})

// @desc Get tricks by difficulty
// @route GET /api/tricks/difficulty
// @access Public


const getTricksByDifficulty = asyncHandler(async (req, res) => {
  const difficulty = req.query.difficulty;

  // You can perform validation or additional checks on the difficulty value if needed

  const tricks = await Trick.find({ difficulty });

  res.status(200).json(tricks);
});

// @desc Get tricks by category
// @route GET /api/tricks/category
// @access Public


const getTricksByCategory = asyncHandler(async (req, res) => {
  const category = req.query.category;

  // You can perform validation or additional checks on the difficulty value if needed

  const tricks = await Trick.find({ category });

  res.status(200).json(tricks);
});

// @desc Post tricks
// @route POST /api/tricks
// @access Private

const setTrick = asyncHandler(async (req, res) => {
  if(!req.body.name) {
    res.status(400)
    throw new  Error('Please add a text field')
  }

  const trick = await Trick.create({
    name: req.body.name,
    description: req.body.description,
    difficulty: req.body.difficulty,
    category: req.body.category,
    videoUrl: req.body.videoUrl,
  })

  res.status(200).json(trick)
})

// @desc Update trick
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

// @desc Delete trick
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
  getTricksByDifficulty,
  getTricksByCategory,
  setTrick,
  updateTrick,
  deleteTrick
}