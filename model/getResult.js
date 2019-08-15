let moment = require('moment');

module.exports =  async (io,client) => {
    let socketResult;
    setInterval(async () => {
        let getResult = new  Promise( function (getResult) {
            client.get('result', function (err, data, result) {
                result = {};
               //your function here
                getResult(result)
            });
        });
        socketResult = await getResult;
    },1000);
    io.on('connection',function (socket) {
        setInterval( () => {
            socket.emit('broadcast',socketResult)
        },1000)
    })
};

