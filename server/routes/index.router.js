const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');

router.post('/info', ctrlUser.modifyinfo);

module.exports = router;
