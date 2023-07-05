const express = require('express')
const router = express.Router()
const { getTricks, setTrick, updateTrick, deleteTrick } = require('../controllers/trickController')

router.route('/').get(getTricks).post(setTrick)

router.route('/:id').put(updateTrick).delete(deleteTrick)

module.exports  = router