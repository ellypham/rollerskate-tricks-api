const express = require('express')
const router = express.Router()
const { getTricks, setTricks, updateTricks, deleteTricks } = require('../controllers/trickController')

router.route('/').get(getTricks).post(setTricks)

router.route('/:id').put(updateTricks).delete(deleteTricks)

module.exports  = router