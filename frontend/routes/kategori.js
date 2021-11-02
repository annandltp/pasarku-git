const express = require('express')
const router = express.Router()
const kategori = require('../controllers/kategori.controller')
const validation = require('../validation/kategori/kategori.validation')

router.get('/', kategori.findAll)
router.get('/:id', kategori.findOne)
router.post('/', validation.createKategori, kategori.create)
router.put('/:id', validation.createKategori, kategori.update)
router.delete('/:id', kategori.delete)

module.exports = router

