const { index, show, search, store, update, destroy } = require('../controller/product.js');
const express = require('express');
const router = express.Router();

router.get('/', index);
router.get('/:id', show);
router.get('/query/:search', search);
router.post('/', store);
router.put('/:id', update);
router.delete('/:id', destroy);

module.exports = router;
