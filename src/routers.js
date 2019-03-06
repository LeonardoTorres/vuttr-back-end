const express = require('express');
const toolsRouters = require('./domain/tools/tool.routers');
const routers = express.Router();

routers.use('/', toolsRouters);
module.exports = toolsRouters;