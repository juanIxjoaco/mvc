const express = require('express');
const router = express.Router();

const controlador = require ('../controllers/mainController.js');

router.get('/', controlador.index);
router.get('/about', controlador.about);
module.exports = router;