const express = require('express');
const toolsRouters = require('./domain/tools/tool.routers');
const authRouters = require('./domain/auth/auth.routers');
const authIntercepts = require('./domain/auth/auth.interceptor');
const routers = express.Router();

if (process.env.AUTH_MODE){
    routers.use('/tools',authIntercepts, toolsRouters);
}else{
    routers.use('/tools', toolsRouters);
}
routers.use('/signin', authRouters);

module.exports = routers;