const mongoose = require('mongoose');

const connect = ()=>{
    return mongoose.connect("mongodb+srv://niks:niks_1441@cluster0.tkouq.mongodb.net/bankingSystem?retryWrites=true&w=majority")
} 

module.exports = connect;