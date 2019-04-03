let express = require('express');
let bodyParser = require('body-parser');
let retrieveFunctions = require('./retrieverController.js')
let morgan = require('morgan');
let compression = require('compression');

let server = express();
server.use(compression());
server.use(bodyParser.json());
server.use(morgan('dev'));
server.use('/:id', express.static(__dirname + '/client/dist'));

server.get('/api/description/:id', retrieveFunctions.retriever);

let port = 3009;
server.listen(port, () => {
  console.log(`listning on port ${port}`);
});

module.exports.server = server;
