/*

const dgram = require('dgram');
const server = dgram.createSocket('udp4');
var fs = require('fs');
var PORT = 9999;
var HOST = '192.168.0.107';

var wstream = fs.createWriteStream('patok.ts');
server.on('error', (err) => {
    console.log(`server error:\n${err.stack}`)
    server.close();
});

server.on('message', (msg, rinfo) => {
   // console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
    console.log(rinfo);
    wstream.write(msg);
});

server.on('listening', () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(PORT, HOST);
*/

const NodeMediaServer = require('node-media-server');

const config = {
    rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 30,
        ping_timeout: 60
    },
    http: {
        port: 8000,
        mediaroot: './media',
        allow_origin: '*'
    },
    trans: {
        ffmpeg: 'C:\\hls\\ffmpeg-20190425-1ae5a64-win64-static\\bin\\ffmpeg.exe',
        tasks: [
            {
                app: 'live',
                hls: true,
                hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
                dash: true,
                dashFlags: '[f=dash:window_size=3:extra_window_size=5]'
            }
        ]
    }
};

var nms = new NodeMediaServer(config)
nms.run();
