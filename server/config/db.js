const mongoose = require("mongoose");

const PORT = process.env.PORT

function startDB(){
    mongoose.connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    (err, db) => {
        if(err){
            console.log(err)
        }
        else{
            console.log("DB started", PORT)
        }
    })

}

module.exports = startDB