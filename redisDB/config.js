const redis   = require('redis'),
    client    = redis.createClient({
        port      : 8069,
        host      : 'localhost',
        db        :0,
        password  : 'password'

    });


client.on('connect', function() {
    console.log('Connection Succes(RedisDB)');
});

client.on('error',function () {
    console.log('Network is Unrechable');
    console.log('cannot connect to REDIS')
});

module.exports = client;
