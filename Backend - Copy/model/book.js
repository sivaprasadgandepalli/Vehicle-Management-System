const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bookSchema = new Schema({
    Vid:{
        type:String,
        require:true
    },
    model:{
        type:String,
        require:true
    },
    company:{
        type:String,
        require:true
    },
    Oid:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    }
})


module.exports = mongoose.model('books', bookSchema)