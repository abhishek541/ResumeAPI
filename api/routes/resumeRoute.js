const express = require('express');
const router = express.Router();

const resumeController = require('../controllers').resumeController;

router.get('/resume', resumeController.getSample);

module.exports = router;