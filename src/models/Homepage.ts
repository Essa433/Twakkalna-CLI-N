// const mongoose = require("mongoose")

const HomepageSchema = mongoose.Schema({
  
  
    user_id: mongoose.ObjectId,
    profile_id: mongoose.ObjectId,
    DataPanel_id: mongoose.ObjectId
  
  })
  
  const Homepage = mongoose.model("Homepage", HomepageSchema)
  
  module.exports = Homepage