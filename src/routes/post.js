const express = require('express');
const router = express.Router();

const postsController = require('../app/controllers/PostsController');

router.use('/:slug', postsController.show);
router.use('/', postsController.index);

module.exports = router;