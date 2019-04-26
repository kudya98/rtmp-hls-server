const NodeMediaServer = require('node-media-server');
var config = require('./config');
var rimraf = require("rimraf");
var nms = new NodeMediaServer(config);
nms.on('donePublish', (id, StreamPath, args) => {
    setTimeout(()=>rimraf(`./media${StreamPath}`, function () { console.log(`${StreamPath} cleared`); }),0);
});
nms.run();
