/** Packs*/
const mongoose = require("mongoose")

/**Schema */
const periodSchema = new mongoose.Schema({
    year:{
        type: "Number",
        required: true,
        min: 2020,
        max: 2030
   },
   number:{
    type: "Number",
    required: true,
    min: 1,
    max: 2
   },
   current:{
       type: "Boolean",
       required: true,
       default: true
   }
})
/** Schema Exportation */
module.exports = periodSchema
