const NodeMediaServer = require('node-media-server');
var config = require('./config');
var rimraf = require("rimraf");
var nms = new NodeMediaServer(config);
nms.on('preConnect', (id, args) => {
    console.log(args);
});
nms.on('donePublish', (id, args) => {
    //console.log(args);
    //rimraf("./media", function () { console.log("done"); });
});
setInterval(()=>console.log(new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds()),1000);
nms.run();
