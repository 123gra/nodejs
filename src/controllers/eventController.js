const express=require('express');
var router=express.Router();
var ObjectId= require('mongoose').Types.ObjectId;
var {Event} =require('../models/event');
//main route
router.get('/',(req,res)=> {
    Event.find((err,docs) => {
        if(!err){res.send(docs);}
        else{console.log('error in retrieving event');}
    });

});
//if given id is present or not
router.get('/:id',(req,res)=> {
    if(!ObjectId.isValid(req.params.id))
     return res.status(400).send('no record with given id: ${req.params.id}');
Event.findById(req.params.id, (err,doc) => {
    if(!err) {res.send(doc);}
    else {console.log('error in retrieving  event');}

} );
    });
//for adding an event
router.post('/', (req,res)=>{
   var evt=new Event({
      
       description:req.body.description,
       venue :req.body.venue,
       startdate:req.body.startdate,
       enddate:req.body.enddate,
       time:req.body.time,
       city:req.body.city,
       status:req.body.status,


   });
   evt.save((err,doc)=> {
    if(!err){res.send(doc);}
    else{console.log('error in event save');}
   });
});

//updating a event
router.put('/:id',(req,res)=> {
    if(!ObjectId.isValid(req.params.id))
     return res.status(400).send('no record with given id: ${req.params.id}');

     var evt={
        description:req.body.description,
        venue :req.body.venue,
        startdate:req.body.startdate,
        enddate:req.body.enddate,
        time:req.body.time,
        city:req.body.city,
        status:req.body.status,

     };
     Event.findByIdAndUpdate(req.params.id, {$set:evt},{new:true},(err,doc)=> {
        if(!err){res.send(doc);}
        else{console.log('error in event update');}
       });
});

//delete event
router.delete('/:id',(req,res)=> {
    if(!ObjectId.isValid(req.params.id))
     return res.status(400).send('no record with given id: ${req.params.id}');
 Event.findByIdAndRemove(req.params.id,(err,doc)=> {
    if(!err){res.send(doc);}
    else{console.log('error in event delete');}
   });
});

module.exports=router;