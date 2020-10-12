/** Packs*/
const mongoose = require("mongoose")
const validator = require("mongoose-unique-validator")

/**Schema */
const programSchema = new mongoose.Schema({
    id:{
        type: "String",
        required: true
    },
    code: {
        type: "String",
        required: true
    },
    name: {
        type: "String",
        required: true
    },
    nameDirector:{
        type: "String",
        required: true
    }
})
/** Schema Exportation */
programSchema.plugin(validator)
module.exports = programSchema
