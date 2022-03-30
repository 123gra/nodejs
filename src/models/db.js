require('dotenv').config();
const mongoose=require('mongoose');

port="8000";

mongoose.connect(process.env.MONGO_URI, (err)=>{
    if(!err)
    {
        console.log('connected to mongoDB');
    }
    else
    {
        console.log(err);
    }
});

module.exports= mongoose;