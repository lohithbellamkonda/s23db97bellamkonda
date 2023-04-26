const mongoose = require("mongoose")
const goatSchema = mongoose.Schema({
    goat_color : String,
    goat_size: {
        type: String,
        required: true,
        match: /^[a-zA-Z]+$/
      },
    goat_weight: {
        type:Number,
        min: 1000,
        max: 8000 } 
    
    })
module.exports = mongoose.model("goat",goatSchema)