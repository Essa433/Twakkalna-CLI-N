// const mongoose = require("mongoose")

const DataPanelSchema = mongoose.Schema({
  
  
  Data_type: [String],
  user_id: mongoose.ObjectId,
  Data_tytle: String,
  Data_aftar: String

})

const DataPanel = mongoose.model("DataPanel", DataPanelSchema)

module.exports = DataPanel