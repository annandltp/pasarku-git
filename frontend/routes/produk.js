const express = require('express')
const router = express.Router()
const produk = require('../controllers/produk.controller')
const handleUpload = require('../libs/handleUpload')
const validation = require('../validation/produk/produk.validation')

router.get('/', produk.findAll)
router.get('/:id', produk.findOne)
router.post('/', handleUpload.single('image'), validation.createProduk, produk.create)
router.put('/:id', handleUpload.single('image'), validation.createProduk, produk.update)
router.delete('/:id', produk.delete)

module.exports = router

