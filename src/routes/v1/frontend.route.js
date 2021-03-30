const express = require('express');

const router = express.Router();

const Frontend = require('../../controllers/frontend/index');

// Homepage

router.get('/', Frontend.homepage);
router.get('/home', Frontend.homepage);

// Render static sages

router.get('/:page', Frontend.getStaticPage);

module.exports = router;
