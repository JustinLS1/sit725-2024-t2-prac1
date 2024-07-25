var express = require("express")
var app = express()
var addTwoNumber = (n1, n2) => {
    return n1 + n2;
}

app.get('/', (req, res)=>{
    res.send('Week 2')
})

app.get('/add', (req, res) => {
    var n1 = parseInt(req.query.n1);
    var n2 = parseInt(req.query.n2);
    var result = addTwoNumber(n1, n2);
    res.json({ statuscocde:200, data: result })
})

var port = process.env.port || 3000;
app.listen(port,()=>{
    console.log("App listening to: "+port)
})