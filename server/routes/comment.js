const express = require('express');
const router = express.Router();
const CommentController= require('../controllers/CommentController');

router.post('/',CommentController.createComment)


module.exports = router;