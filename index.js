require('dotenv').config();
const express=require('express');
const bodyParser=require('body-parser');
const {mongoose}=require('./src/models/db.js');
var eventController=require('./src/controllers/eventController');
const cors=require('cors');

const app=express();
app.use(cors({origin:'http://localhost:4200'}));

app.use(bodyParser.json());
app.listen(port, console.log('listening to'+port));
app.use('/addevents',eventController);