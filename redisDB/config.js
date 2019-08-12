const redis   = require('redis'),
    client    = redis.createClient({
        port      : 8069,
        host      : '192.168.30.12',
        db        :0,
        password  : 'naikgaji'

    });


client.on('connect', function() {
    console.log('Connection Succes(RedisDB)');
});

client.on('error',function () {
    console.log('Network is Unrechable');
    console.log('cannot connect to REDIS')
});

module.exports = client;