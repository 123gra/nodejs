const mongoose=require('mongoose');

var Event = mongoose.model('Event',{
  
  description:String,
  venue: String,
  startdate: String,
  enddate: String,
  time:String,
  city:String,
  status:String

});

module.exports={Event};