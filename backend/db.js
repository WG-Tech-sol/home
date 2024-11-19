const mongoose = require ('mongoose')
const URI =('mongodb://localhost:27017/Team')

const connectToMongo=()=>{
  mongoose.connect(URI) 
  console.log("connected to the mongoose successfully")
}

module.exports = {connectToMongo};
