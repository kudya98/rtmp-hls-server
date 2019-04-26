const config = {
    rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 30,
        ping_timeout: 10
    },
    http: {
        port: 8000,
        mediaroot: './media',
        allow_origin: '*'
    },
    auth: {
        api : true,
        api_user: 'admin',
        api_pass: 'admin',
    },
    trans: {
        ffmpeg: 'C:/hls/ffmpeg-20190425-1ae5a64-win64-static/bin/ffmpeg.exe',
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

module.exports = config;