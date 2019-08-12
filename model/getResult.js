let moment = require('moment');

module.exports =  async (io,client) => {
    let socketResult;
    setInterval(async () => {
        let getResult = new  Promise( function (getResult) {
            client.get('result', function (err, data, result) {
                result = {};
                let obj = JSON.parse(data);
                let current_time = moment(new Date());
                let starting_time = moment(obj['startingTime']);
                let duration = moment.duration(current_time.diff(starting_time));
                let seconds = duration.asMilliseconds() / 1000;
                let timer = (30 - seconds % 30);

                result.player = obj['playerCard'];
                result.banker = obj['bankerCard'];
                result.result = obj['result'];
                result.shuffle = obj['shuffle'];
                result.round = obj['round'];
                result.roundtime = Math.floor(timer);
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

