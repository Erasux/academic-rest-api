/**Packs */
const express= require("express")
const config = require("config")
const bodyParser= require("body-parser")


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

app.get("/",(req, res, next)=>{
    res.send("Welcome to academic rest api")
})
//**Student routes */
const studentRoutes = require("./routes/student.routes")
studentRoutes(app);

//Teahcer routes
const teacherRoutes = require("./routes/teacher.routes")
teacherRoutes(app);
//Period routes
const periodRoutes = require("./routes/period.routes")
periodRoutes(app);
//Course routes
const courseRoutes = require("./routes/course.routes")
courseRoutes(app);
//User routes
const userRoutes = require("./routes/user.routes")
userRoutes(app);

app.listen(port, ()=>{
    console.log("Server is running...")
})