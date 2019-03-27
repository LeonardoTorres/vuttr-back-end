const express = require('express');
const authRouters = express.Router();
const authService = require('./auth.service');
const authController = require('./auth.controller')(authService);

authRouters.get('/', (req,res) => {
    authController.signIn(req, res);
});

module.exports = authRouters;