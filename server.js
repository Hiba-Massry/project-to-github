const express = require('express')
const app = express()

app.use('/', (req, res) => {
    res.send("<h1>Hello World!</h1>")
})

app.listen(3002, ( )=> {
    console.log("SErver is running on port 3002")
})