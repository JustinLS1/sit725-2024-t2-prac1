var express = require("express")
var app = express()
var dbConnect = require("./dbConnection");

dbConnect();

var http = require('http').createServer(app);

var projectsRoute = require('./routers/projects')
var port = process.env.port || 3000;

app.use(express.static(__dirname))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/cards',projectsRoute)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/website.html');
});

app.get('/api/cards', (req, res) => {
    projectService.getAllCards((err, result) => {
        if (err) {
            res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
        } else {
            res.json({ statusCode: 200, data: result, message: 'success' });
        }
    });
});

app.get("/test", function (request, response) {
    var user_name = request.query.user_name;
    response.end("Hello " + user_name + "!");
});

app.get('/addTwoNumbers/:firstNumber/:secondNumber', function(req,res,next){
    var firstNumber = parseInt(req.params.firstNumber)
    var secondNumber = parseInt(req.params.secondNumber)
    var result = firstNumber + secondNumber || null
    if(result == null) {
        res.json({result: result, statusCode: 400}).status(400)
    }
    else { res.json({result: result, statusCode: 200}).status(200) }
})

let io = require('socket.io')(http);
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    setInterval(()=>{
        socket.emit('number', parseInt(Math.random()*10));
    }, 1000);
});

http.listen(port,()=>{
    console.log("Listening on port ", port);
});
    