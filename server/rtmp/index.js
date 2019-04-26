const NodeMediaServer = require('node-media-server');
var config = require('./config');
var rimraf = require("rimraf");
var nms = new NodeMediaServer(config);
nms.on('preConnect', (id, args) => {
    if (args.tcUrl.indexOf('127.0.0.1') >= 0){
        let session = nms.getSession(id);
        session.reject();
    }
});
nms.on('doneConnect', (id, args) => {
    console.log('[NodeEvent on doneConnect]', `id=${id} args=${JSON.stringify(args)}`);
});
nms.run();
