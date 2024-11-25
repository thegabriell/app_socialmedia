const express = require('express');
const router = express.Router();
const userController = require('../controllers/controller');

// Rotas para registro e login
router.get('/register', (req, res) => res.render('register'));
router.post('/register', userController.register);

router.get('/login', (req, res) => res.render('login'));
router.post('/login', userController.login);

module.exports = router;
