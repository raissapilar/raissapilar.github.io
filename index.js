let express = require('express')
let app = express()
let cors = require(`cors`)
app.use(cors())
app.listen(9010)
app.use(express.static(__dirname + "/public"))

