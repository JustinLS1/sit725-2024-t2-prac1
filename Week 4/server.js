var express = require("express")
var app = express()

app.use(express.static(__dirname))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/website.html');
});

app.get('/api/cards', (req, res) => {
    const cards = [
        { id: 1, title: "Card 1", description: "This is card 1" },
        { id: 2, title: "Card 2", description: "This is card 2" },
        { id: 3, title: "Card 3", description: "This is card 3" },
        { id: 4, title: "Card 4", description: "This is card 4" },
        { id: 5, title: "Card 5", description: "This is card 5" }
    ];
    res.json(cards);
});

var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App listening to: "+port)
})