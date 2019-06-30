const express = require('express')
require('./db/mongoose')
const UserRouter = require('./routers/users')
const app = express()

app.use(express.json())
app.use(UserRouter)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('The server is up on ' + port)
})
