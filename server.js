let express = require('express');
let bodyParser = require('body-parser');
let { retriever } = require('./retrieverController.js');
let morgan = require('morgan');

let server = express();
server.use(bodyParser.json());
server.use(morgan('dev'));
server.use('/:id', express.static(__dirname + '/client/dist'));

server.get('/streetBreezy/api/:id', retriever);

let port = 3009;
server.listen(port, () => {
  console.log(`listning on port ${port}`);
});

module.exports.server = server;
