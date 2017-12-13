var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))
var person = [
    {
    name:'Peff',
    age: 31
    },
    {
        name:'Peff',
        age: 31
        },
    {
    name:'Peff',
    age: 31
    },
]
app.get('/',(req,res)=>{
    // res.send('Hello World')
    res.json(person)
})
app.listen(3000,()=>{
    console.log('Server started on port 3000...')
})