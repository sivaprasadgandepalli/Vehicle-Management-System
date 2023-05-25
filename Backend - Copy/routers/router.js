const express = require('express')
const router = express.Router()
const book = require('../model/book')
const monk=require('monk')
const boologins = require('../model/logins')
var db = monk('127.0.0.1:27017/MeanStack')

router.post('/postdata', async(req,res)=>{
    let books;
    try{
        books = new book({
            Vid:req.body.send.Vid,
            model:req.body.send.model,
            company:req.body.send.company,
            Oid:req.body.send.Oid,
            date:req.body.send.date
        })
        await books.save()
    }catch (err){
        console.log(err)
    }
    if(!books){
        return res.status(500).json({msg:"Someting went wrong"})
    }
    return res.status(200).json({books})
})
const dbo=db.get('books')

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
  
  
  router.get('/getData', function (req,res) {
    dbo.find({}, function (err, docs) {
      if(err){
        res.send(err)
      }else{
        res.send(docs)
      }
    })
})

// const logindata=db.get('userlogin');
// router.get('/userData',function(req,res){
//   loginuser.find({},function(err,docs){
//     if(err){
//       res.send(err)
//     }
//     else{
//       res.send(docs)
//     }
//   })
// })

module.exports= router;