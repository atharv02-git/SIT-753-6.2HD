const express = require("express");
const app = express()
let http = require("http").createServer(app);
let io = require("socket.io")(http);
const port = process.env.port || 3000;
let router = require('./routes/routes');


app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/api/cats', router);

io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    setInterval(()=>{
        socket.emit('number', parseInt(Math.random()*10));
    }, 1000);
});

http.listen(port, () => {
    console.log("App is listeneing on port: " + port)
})