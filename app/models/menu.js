const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({
    name : { type: String, required: true},
    type : { type: String, required: true},
    img : { type: String, required: true},
    price : { type: Number, required: true}
})

module.exports = mongoose.model('menu', menuSchema)