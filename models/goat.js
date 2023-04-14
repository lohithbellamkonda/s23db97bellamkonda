const mongoose = require("mongoose")
const goatSchema = mongoose.Schema({goat_color : String,size: String,weight: Number})
module.exports = mongoose.model("goat",goatSchema)