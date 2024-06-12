const express= require('express')
const routes=require("./Routes")
const DBconnection=require("./DBconnection")
const cors=require('cors')
const app = express()
app.use(express.static(`${__dirname}/upload`));
const bodyParser=require("body-parser")
app.use(bodyParser.json())
app.use(cors())


app.use('/',routes)
app.listen(4000)