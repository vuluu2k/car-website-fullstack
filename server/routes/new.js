const express = require('express');
const router = express.Router();
const NewController = require('../controllers/NewsController');

// [User & Admin] GET NEWS
router.get('/',NewController.getNew)

module.exports = router;