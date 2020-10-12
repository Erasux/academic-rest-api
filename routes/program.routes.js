

const controller = require("../controller/logic/program_controller")

module.exports = (app) => {
    
    app.get("/program", (req, res, next) => {
        controller.getAll(req, res, next)

    })

    app.get("/program/bycode/:code", (req, res, next) => {
        controller.getByCode(req, res, next)
    })
    app.put("/program", (req, res, next) => {
        controller.updateprogram(req, res, next)

    })

    app.post("/program", (req, res, next) => {
        controller.createprogram(req, res, next)
    })
    app.delete("/program", (req, res, next) => {
        controller.deleteprogram(req, res, next)
    })
}
