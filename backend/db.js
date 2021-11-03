const mangoose = require('mongoose');


const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectToMongo = ()=>{
    mangoose.connect(mongoURI, ()=>{
        console.log("Connected to mongo successfully");
    })


}

module.exports = connectToMongo;