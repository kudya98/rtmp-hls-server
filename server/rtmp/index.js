const NodeMediaServer = require('node-media-server');
var config = require('./config');
var nms = new NodeMediaServer(config);
nms.run();
