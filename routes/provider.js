const express = require('express')
const router = express.Router();

const { getProviders } = require('../controllers/provider');

router.route('/providers').get(getProviders);

module.exports = router;