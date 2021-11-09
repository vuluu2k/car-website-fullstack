const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/CommentController');

// [User & Admin] CREATE COMMENT
router.post('/',CommentController.createComment)

module.exports = router;


