const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/splitbills-db")


mongoose.connection.on('open',()=>{
    console.log("connected to database");
})

module.exports = mongoose;