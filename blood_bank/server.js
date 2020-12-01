var express = require('express');
var path = require('path');
var cors = require('cors');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 4000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

const mongoURI = 'mongodb://localhost:27017/BloodBank';
mongoose.connect(mongoURI, {useNewUrlParser:true, useUnifiedTopology: true})
.then(
    ()=>{console.log('Database is connected')},
    err => {console.log('connot connect to the database' + err)}
);

var corsOptions = {
    origin: '*',
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions));

var users = require('./routes/Users');
app.use('/User', users);
var doners = require('./routes/Doners');
app.use('/Doner', doners);
var patients = require('./routes/Patients');
app.use('/Patient', patients);

app.listen(port, ()=>{
    console.log('server is listening on port ' + port);
})

