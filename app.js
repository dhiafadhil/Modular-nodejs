'use strict';
const http = require('http');
const port = process.env.PORT || '80';
const app = require('./controller/apps_controller');
const server = http.createServer(app);
const io = require('socket.io')(server);
const socketServer = require('./model/getResult');
const client = require('./redisDB/config');

app.set('port', port);
server.listen(port);

socketServer(io,client);
