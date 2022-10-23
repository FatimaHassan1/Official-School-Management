const express = require("express");
const router = express.Router();
const presentModel =  require("../modals/requestFormSchema");


// Request Forms
router.route('/addpresent').post((req , res)=>{
    const getpresentdata = req.body;
    const presentdocument = new presentModel(getpresentdata)

    presentdocument.save()
    res.status(201).json(presentdocument);
})

router.route('/all').get( (req , res)=>{
    presentModel.find().then(found=>res.json(found))
})

router.route('/:reid').get((req , res)=>{
    console.log(req.params.reid);
    presentModel.find({_id: req.params.reid})
    .then(found => res.json(found))
})

router.route('/pdf/:reid').get((req , res)=>{
    console.log(req.params.reid);
    presentModel.find({_id: req.params.reid})
    .then(found => res.json(found))
})

router.route('/:reid').put(async(req , res)=>{
    const edituser = new presentModel(req.body)
    try{
        await presentModel.updateOne({_id : req.params.reid} , edituser)
        .then(updated => res.json(updated))
    }catch(error){
        console.log(error)
    }
})

router.route('/approve/:appid').put(async(req , res)=>{
    const edituser = new presentModel(req.body)
    try{
        await presentModel.updateOne({_id : req.params.appid} , {$set : {status : "Approved"}})
        .then(updated => res.json(updated))
    }catch(error){
        console.log(error)
    }
})

router.route('/reject/:rejid').put(async(req , res)=>{
    try{
        await presentModel.updateOne({_id : req.params.rejid} , {$set : {status : "Rejected"}})
        .then(updated => res.json(updated))
    }catch(error){
        console.log(error)
    }
})

router.route('/:id').delete(async(req , res)=>{
    try{
        await presentModel.deleteOne({_id : req.params.id})
        res.status(200).json({message : "User Deleted Successfully"})
    }catch(error){
        console.log(error)
    }
})



module.exports = router;