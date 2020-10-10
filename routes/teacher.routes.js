

const controller = require("../controller/logic/teacher_controller")

module.exports = (app) => {
    
    app.get("/teacher", (req, res, next) => {
        controller.getAll(req, res, next)

    })

    app.get("/teacher/bydocument/:document", (req, res, next) => {
        controller.getBydocument(req, res, next)
    })
    app.put("/teacher", (req, res, next) => {
        controller.updateteacher(req, res, next)

    })

    app.post("/teacher", (req, res, next) => {
        controller.createteacher(req, res, next)
    })
    app.delete("/teacher", (req, res, next) => {
        controller.deleteteacher(req, res, next)
    })
}