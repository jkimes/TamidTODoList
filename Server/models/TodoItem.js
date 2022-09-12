const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },

})

module.exports = mongoose.model("TDItems",itemSchema)