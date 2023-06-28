const asyncHandler = require('express-async-handler')

// @desc Get tricks
// @route GET /api/tricks
// @access Private

const getTricks = aysncHandler(async (req, res) => {
  res.status(200).json({message: 'Get tricks'})
})

// @desc Get tricks
// @route POST /api/tricks
// @access Private

const setTricks = aysncHandler(async (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new  Error('Please add a text field')
  }

  res.status(200).json({message: 'Get tricks'})
})

// @desc Get tricks
// @route PUT /api/tricks
// @access Private

const updateTricks = aysncHandler(async (req, res) => {
  res.status(200).json({message: `Update tricks ${req.params.id}`})
})

// @desc Get tricks
// @route DELETE /api/tricks
// @access Private

const deleteTricks = aysncHandler(async (req, res) => {
  res.status(200).json({message: `Delete tricks ${req.params.id}`})
})

module.exports = {
  getTricks,
  setTricks,
  updateTricks,
  deleteTricks
}