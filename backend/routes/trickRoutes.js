const express = require('express')
const router = express.Router()
const { getTricks, getTricksByDifficulty, getTricksByCategory, setTrick, updateTrick, deleteTrick } = require('../controllers/trickController')

router.route('/').get(getTricks).post(setTrick)

router.route('/difficulty').get(getTricksByDifficulty)

router.route('/category').get(getTricksByCategory)

router.route('/:id').put(updateTrick).delete(deleteTrick)

module.exports  = router