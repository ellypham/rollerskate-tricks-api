const mongoose = require('mongoose')

const trickSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a trick name'],
  },
  description: {
    type: String,
    required: [true, 'Please add a trick description'],
  },
  difficulty: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    required: [true, 'Please add trick difficulty'],
  },
  category: {
    type: String,
    required: [true, 'Please add a trick category']
  },
  videoUrl: {
    type: String,
    required: false,
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Trick', trickSchema)