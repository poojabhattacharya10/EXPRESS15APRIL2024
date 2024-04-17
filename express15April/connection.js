// 27017
const mongoose = require('mongoose')
const connect = async() => {
    try{
        let connection = await mongoose.connect()
    }
    catch(err){
        console.log(err);
    }
}
module.exports = connect