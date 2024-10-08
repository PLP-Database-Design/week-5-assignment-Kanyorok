const express = require('express')
const router = express.Router();

const { getPatients } = require('../controllers/patient');

router.route('/patients').get(getPatients);

module.exports = router;