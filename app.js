/**Packs */
const express = require("express")
const config = require("config")
const bodyParser = require("body-parser")


/**app configuration */
const app = express();
const port = config.get("server-port")
const jsonParser = bodyParser.json()
const urlEncodedParser = bodyParser.urlencoded({
    extended: true
})
/**Methods */

app.use(jsonParser)
app.use(urlEncodedParser)

app.get("/", (req, res, next) => {
    res.send("Welcome to academic rest api")
})

//User routes loading
const userRoutes = require("./routes/user.routes")
userRoutes(app);

//token middleware
tkFn = require("./middleware/verifyToken")
app.use(tkFn)

//**Student routes */
const studentRoutes = require("./routes/student.routes")
studentRoutes(app);

//Teacher routes
const teacherRoutes = require("./routes/teacher.routes")
teacherRoutes(app);
//Period routes
const periodRoutes = require("./routes/period.routes")
periodRoutes(app);
//Course routes
const courseRoutes = require("./routes/course.routes")
courseRoutes(app);
//Faculty routes
const facultyRoutes = require("./routes/faculty.routes")
facultyRoutes(app);
//Program routes
const programRoutes = require("./routes/program.routes")
programRoutes(app);


app.listen(port, () => {
    console.log("Server is running.")
})