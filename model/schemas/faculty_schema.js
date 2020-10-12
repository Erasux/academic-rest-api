/** Packs*/
const mongoose = require("mongoose")
const validator = require("mongoose-unique-validator")

/**Schema */
const facultySchema = new mongoose.Schema({
    code: {
        type: "String",
        required: true
    },
    name: {
        type: "String",
        required: true
    },
    nameDean:{
        type: "String",
        required: true
    }
})
/** Schema Exportation */
facultySchema.plugin(validator)
module.exports = facultySchema
