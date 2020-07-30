const express = require('express');

const loginController = require('../controller/log-in');

const router = express.Router();

router.get('/login', loginController.getLogin);

router.post('/login', loginController.postLogin);

router.get('/details', loginController.getDetails);

router.get('/delete/:IdPage', loginController.getDelete);

router.get('/select/:IdPage', loginController.getSelect);

exports.routes = router;
