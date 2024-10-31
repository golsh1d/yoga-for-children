let express = require(`express`)
let cors = require(`cors`)
let bodyParser = require(`body-parser`)
let meditationsRoute = require(`./Routs/meditation`)
let courseDataRoute = require(`./Routs/courseData`)
let courseDataDetailRoute = require(`./Routs/courseDataDetail`)
let courseDataDetailAllLessonsRoute = require(`./Routs/courseDataDetailAllLessons`)
let usersRoute = require(`./Routs/users`)
let courseRoute = require(`./Routs/courseOrder`)

let app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(`/api/meditations` , meditationsRoute)
app.use(`/api/courseData` , courseDataRoute)
app.use(`/api/courseDataDetail` , courseDataDetailRoute)
app.use(`/api/courseDataDetailAllLessons` , courseDataDetailAllLessonsRoute)
app.use(`/api/users` , usersRoute)
app.use(`/api/courseOrder` , courseRoute)

app.listen(3000 , () => {
    console.log('port 3000');
})