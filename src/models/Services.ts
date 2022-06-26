// const mongoose = require("mongoose")

const ServiceSchema = new mongoose.Schema({
    Service_name: String,
    Service_type: [String],

})

const Services = mongoose.model("Services", ServiceSchema)

module.exports = Services