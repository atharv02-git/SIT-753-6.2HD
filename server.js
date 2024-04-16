const express = require("express");
const app = express()
const port = process.env.port || 3000;
let router = require('./routes/routes');

app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/api/cats', router);


app.listen(port, () => {
    console.log("App is listeneing on port: " + port)
})