// const mongoose = require("mongoose")

const profileSchema = mongoose.Schema({
  
    first_name: String,
  last_name: String,
  national_id: Number,
  nationality: [String],
  blood_type: [String],
  marital_status: String,
  photo: URL,
  date_birth: Date,
  place_birth: String,
  updated_at: Date,
  created_at: Date,
  user_id: mongoose.ObjectId,

})

const profile = mongoose.model("profile", profileSchema)

module.exports = profile