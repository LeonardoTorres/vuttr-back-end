const express = require('express');
const toolsRouter = express.Router();
const toolsController = require('./tool.controller');

toolsRouter.post('/', toolsController.create);
toolsRouter.get('/', toolsController.list);
toolsRouter.put('/', toolsController.update);
toolsRouter.delete('/:id', toolsController.delete);

module.exports = toolsRouter;

