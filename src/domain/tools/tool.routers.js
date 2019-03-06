const express = require('express');
const toolsRouter = express.Router();
const toolsController = require('./tool.controller');

toolsRouter.post('/tools', toolsController.create);
toolsRouter.get('/tools', toolsController.list);
toolsRouter.put('/tools', toolsController.update);
toolsRouter.delete('/tools/:id', toolsController.delete);

module.exports = toolsRouter;

